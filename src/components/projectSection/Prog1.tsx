import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ittaeOkMockup from "../../assets/img/ittaeOk-mockup.png";

gsap.registerPlugin(ScrollTrigger);

// 컴포넌트 이름을 더 명확하게 변경
const Proj1 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
          markers: true, // 개발 완료 후에 false로 변경
        },
      });

      timeline
        .from(".image-container-gsap", {
          x: -200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
        .from(
          ".desc-container-gsap > *",
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[100dvh] w-full flex justify-center items-center bg-black overflow-hidden px-8"
    >
      <div className="flex items-center gap-20 w-full max-w-7xl p-8 md:flex-col md:gap-12">
        {/* Image Container */}
        <div className="image-container-gsap flex-[1.5] flex justify-center items-center max-w-[450px]">
          <img
            className="w-4/5 object-contain rounded-xl shadow-2xl"
            src={ittaeOkMockup}
            alt="이때어때 목업"
          />
        </div>

        {/* Description Container */}
        <div className="desc-container-gsap flex-1 text-white">
          <h2 className="text-6xl font-bold mb-6">이때 어때</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            이때 어때 설명
          </p>
        </div>
      </div>
    </section>
  );
};

export default Proj1;
