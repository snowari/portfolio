import IntroDetail from "../IntroDetail";
import BackgroundEffect from "../ui/BackgroundEffect";

interface IntroSectionProps {
  id?: string;
  className?: string;
}
const IntroSection = ({ id, className }: IntroSectionProps) => {
  return (
    <section
      id={id}
      className={`${className} min-h-screen relative flex flex-col `}
    >
      {/* 비네팅 효과  */}
      <div className="pointer-events-none w-screen h-screen inset-0 z-0 rounded-5xl shadow-[inset_0_0_8vw_5vw_rgba(0,0,0,0.5)]">
        <BackgroundEffect />
        <div className="relative z-0 flex justify-center items-center pt-40">
          <IntroDetail />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
