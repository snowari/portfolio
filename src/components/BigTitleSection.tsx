import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BigTitleSectionProps {
  text: string;
  className?: string;
}

const BigTitleSection = ({ text, className }: BigTitleSectionProps) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray(".letter") as HTMLElement[];

      // 초기 상태: 글자들을 마스크 영역 아래쪽에 숨김
      gsap.set(chars, { yPercent: 100 });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "bottom 90%", // 애니메이션 구간을 명확히 설정
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const midPoint = (chars.length - 1) / 2;

          chars.forEach((char, i) => {
            // 기본 움직임: 스크롤에 따라 y 위치가 100% -> 0%로 이동
            const y_reveal = gsap.utils.mapRange(0, 1, 100, 0)(progress);

            // 곡선 움직임: 스크롤 중간에 가장 많이 휘고 시작/끝은 0
            const curveFactor = Math.sin(progress * Math.PI);
            const dist = Math.abs(i - midPoint);
            // 아래로 볼록(n자 모양)을 위해 음수(-) 값 적용
            const y_curve = -(dist * dist * 40 * curveFactor);

            // 최종 y 위치 적용
            gsap.to(char, {
              yPercent: y_reveal + y_curve,
              ease: "none",
              overwrite: true,
            });
          });
        },
        onLeave: () => gsap.to(chars, { yPercent: 0 }),
        onEnterBack: () => gsap.to(chars, { yPercent: 0 }),
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="h-[40vh] flex justify-center items-center"
    >
      {/* 1. 마스크 역할을 하는 부모 div 추가 */}
      <div className="overflow-hidden">
        <h2
          className={`flex gap-x-2 font-sofia font-black text-[12rem] md:text-[10rem] sm:text-[8rem] ${className}`}
        >
          {text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split("").map((char, charIndex) => (
                <span key={charIndex} className="letter relative inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default BigTitleSection;
