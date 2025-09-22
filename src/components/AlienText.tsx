import { useState, useEffect } from "react";
import randomChar from "../utils/randomChar";

interface AlienTextEffectProps {
  text: string;
}

export default function AlienTextEffect({ text }: AlienTextEffectProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (isAnimating) {
      let iteration = 0;
      const maxIterations = text.length * 3;

      const animate = () => {
        if (iteration < maxIterations) {
          const newText = text
            .split("")
            .map((_, idx) => {
              if (idx < Math.floor(iteration / 3)) return text[idx];
              return randomChar();
            })
            .join("");

          setDisplayText(newText);
          iteration++;
          timeoutId = window.setTimeout(animate, 40);
        } else {
          setDisplayText(text);
          setIsAnimating(false);
        }
      };
      animate();
    }
    return () => window.clearTimeout(timeoutId);
  }, [isAnimating, text]);

  return (
    <li
      className="font-neuebit cursor-pointer text-[var(--color-black)] text-[2.5rem] transition-colors duration-200 min-w-[180px] relative text-right"
      onMouseEnter={() => {
        if (!isAnimating) setIsAnimating(true);
      }}
    >
      {displayText}
    </li>
  );
}
