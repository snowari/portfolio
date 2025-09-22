import { useEffect, useState } from "react";
import getCurrentTime from "../../utils/getCurrentTime";
import AlienText from "../AlienText";
import { TfiGithub } from "react-icons/tfi";
import { HiArrowUpRight } from "react-icons/hi2";
import AnimationLink from "./AnimationLink";

const Header = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [dotVisible, setDotVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setDotVisible((v) => !v);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-20 py-8 mx-auto">
      <div className="flex items-start justify-between">
        <div className="flex-1 flex justify-start">
          <AnimationLink
            href="https://github.com/snowari"
            text="SNOWARI"
            icon={<TfiGithub />}
            hoveredIcon={<HiArrowUpRight />}
            className="mix-blend-difference text-black"
          />
        </div>

        <div className="font-neuebit text-4xl flex items-center mix-blend-difference text-black">
          <span
            className={`
              inline-block w-[0.3em] h-[0.3em] mr-[0.6em] rounded-full bg-red-500
              align-middle shadow-[0_0_8px_2px_rgba(255,0,0,0.5)]
              transition-opacity duration-200
              ${dotVisible ? "opacity-100" : "opacity-20"}
            `}
          />
          {time}
        </div>

        <div className="flex-1 flex justify-end">
          <nav>
            <ul className="flex flex-col items-end gap-5 list-none">
              <li className="mix-blend-difference text-black">
                <AlienText text="INTRO" />
              </li>
              <li className="mix-blend-difference text-black">
                <AlienText text="WORK" />
              </li>
              <li className="mix-blend-difference text-black">
                <AlienText text="REVIEW" />
              </li>
              <li className="mix-blend-difference text-black">
                <AlienText text="CONTACT" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
