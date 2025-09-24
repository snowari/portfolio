import { useEffect, useState } from "react";
import getCurrentTime from "../../utils/getCurrentTime";
import AlienText from "../AlienText";
import { TfiGithub } from "react-icons/tfi";
import { HiArrowUpRight } from "react-icons/hi2";
import AnimationLink from "./AnimationLink";
const menuItems = [
  { label: "INTRO", href: "#home" },
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

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
    <header className="fixed left-0 top-0 z-40 w-full px-20 py-8 mx-auto pointer-events-none ">
      <div className="mix-blend-difference text-black">
        <div className="flex items-start justify-between ">
          <div className="flex-1 flex justify-start pointer-events-auto ">
            <AnimationLink
              href="https://github.com/snowari"
              text="SNOWARI"
              icon={<TfiGithub className="text-current" />}
              hoveredIcon={<HiArrowUpRight className="text-current" />}
              className=""
            />
          </div>

          <div className="font-neuebit text-4xl flex items-center">
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

          <div className="flex-1 flex justify-end pointer-events-auto">
            <nav>
              <ul className="flex flex-col items-end gap-5 list-none ">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className="font-neuebit cursor-pointer text-[2.5rem] transition-colors duration-200 min-w-[180px] relative text-right mix-blend-difference"
                  >
                    <AlienText text={item.label} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
