interface SplitTextProps {
  children: string;
  className?: string;
}

const SplitText = ({ children, className }: SplitTextProps) => {
  return (
    <span className={className}>
      {children.split("\n").map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <span className="block translate-y-full">{line}</span>
        </span>
      ))}
    </span>
  );
};

export default SplitText;
