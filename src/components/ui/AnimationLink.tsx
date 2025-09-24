import { useEffect, useRef, useState, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface AnimatedLinkProps {
  href?: string;
  to?: string;
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
  to,
}: AnimatedLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const iconRef = useRef<HTMLDivElement>(null);
  const [iconSize, setIconSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (iconRef.current) {
      setIconSize({
        width: iconRef.current.offsetWidth,
        height: iconRef.current.offsetHeight,
      });
    }
  }, [icon]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      href={href || to || "#"}
      target={href && !to ? "_blank" : undefined}
      rel={href && !to ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex items-center gap-4 text-4xl font-neuebit ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <span>{text}</span>
      <div
        className="relative overflow-hidden"
        style={{ width: iconSize.width, height: iconSize.height }}
      >
        {/* 기본 아이콘 */}
        <div
          ref={iconRef}
          className="absolute transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered
              ? `translateX(${iconSize.width}px)`
              : "translateX(0)",
          }}
        >
          {icon}
        </div>

        {/* 호버 시 나타나는 아이콘 */}
        <div
          className="absolute transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered
              ? "translateX(0)"
              : `translateX(-${iconSize.width}px)`,
          }}
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
