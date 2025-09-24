import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BigTitleSection = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 90%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={container} className="h-[40vh] ...">
      <div className="overflow-hidden">
        <motion.h2
          style={{ y, opacity }}
          className={`flex gap-x-2 ... ${className}`}
        >
          {text}
        </motion.h2>
      </div>
    </section>
  );
};
export default BigTitleSection;
