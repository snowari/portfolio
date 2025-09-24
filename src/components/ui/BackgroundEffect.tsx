const BackgroundEffect = () => {
  return (
    <>
      {/* 스캔라인 효과 */}
      <div
        className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply 
      bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.05)_0px,rgba(0,0,0,0.05)_2px,transparent_2px,transparent_10px)] animate-scanline-move"
      />
    </>
  );
};

export default BackgroundEffect;
