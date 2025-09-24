import { useState, useEffect } from "react";
import randomChar from "../utils/randomChar";

interface AlienTextProps {
  text: string;
  className?: string;
  onMouseEnter?: () => void;
}

const AlienText = ({ text, className, onMouseEnter }: AlienTextProps) => {
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
    <span
      className={className}
      onMouseEnter={() => {
        if (!isAnimating) {
          setIsAnimating(true);
          onMouseEnter?.();
        }
      }}
    >
      {displayText}
    </span>
  );
};
export default AlienText;
