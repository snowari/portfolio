import { useState, type ReactElement } from "react";

interface AnimatedLinkProps {
  href: string;
  text: string;
  icon: ReactElement;
  hoveredIcon: ReactElement;
  className?: string;
}

const AnimationLink = ({
  href,
  text,
  icon,
  hoveredIcon,
  className,
}: AnimatedLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-4 text-4xl font-neuebit ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{text}</span>
      <div className="relative w-[2.25rem] h-[2.25rem] overflow-hidden ">
        <div
          className={`absolute transition-transform duration-300 ease-in-out
                      ${isHovered ? "translate-x-full" : "translate-x-0"}`}
        >
          {icon}
        </div>

        <div
          className={`absolute transition-transform duration-300 ease-in-out
                      ${isHovered ? "translate-x-0" : "-translate-x-full"}`}
        >
          {hoveredIcon}
        </div>
      </div>
      <span
        className="absolute bottom-[-4px] left-0 h-[2px] w-full origin-left bg-current
                   transition-transform duration-300 ease-out 
                   scale-x-0 group-hover:scale-x-100"
      />
    </a>
  );
};

export default AnimationLink;
