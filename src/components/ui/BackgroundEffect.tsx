// import type { ReactNode } from "react";

// const BackgroundEffect = ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="min-h-screen w-screen relative bg-[var(--color-white)]]">
//       {/* 스캔 라인 효과 */}
//       <div
//         className="pointer-events-none absolute inset-0 z-20 mix-blend-multiply
//        bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,transparent_3px,transparent_12px)]
//         animate-scanline-move"
//       >
//         {/* 중앙 하이라이트 */}
//         <div
//           className="pointer-events-none absolute inset-0 z-30
//         bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]"
//         />
//       </div>
//       <div className="relative z-50 min-h-screen">{children}</div>
//     </div>
//   );
// };

// export default BackgroundEffect;

import type { ReactNode } from "react";

const BackgroundEffect = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-screen relative bg-white overflow-hidden">
      {/* 비네팅 */}
      <div
        className="pointer-events-none absolute inset-0
        [box-shadow:inset_0_0_120px_90px_#101010]"
      />
      {/* 스캔라인 */}
      <div
        className="pointer-events-none absolute inset-0 z-70 mix-blend-multiply
       bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,transparent_3px,transparent_12px)]
        animate-scanline-move"
      >
        {/* 중앙하이라이트 */}
        <div
          className="pointer-events-none absolute inset-0 z-30
        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]"
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-50 min-h-screen px-25 py-18 ">{children}</div>
    </div>
  );
};

export default BackgroundEffect;
