export interface Project {
  projectNumber: number;
  serviceName: string;
  description: string;
  period: string;
  techStack: string;
  linkTo: string;
  className?: string;
  imageSrc: string;
  imageClassName: string;
  imageContainerClassName?: string;
}
export const projects: Project[] = [
  {
    projectNumber: 1,
    serviceName: "이때 어때",
    description: "효율적인 일정 조율을 위한 통합 스케줄링 플랫폼",
    period: "2025. 6. 30 - 2025. 7. 31",
    techStack: "Next.js, TypeScript, TailwindCSS",
    linkTo: "/projects/ittae-ok",
    className: "",
    imageSrc: "src/assets/img/ittae-ok-mockup.png",
    imageClassName: "max-w-[430px]",
    imageContainerClassName: "absolute right-160 top-1/2 -translate-y-1/2",
  },
  {
    projectNumber: 2,
    serviceName: "뉴스 독스",
    description:
      "OpenAI로 관심 분야 뉴스를 요약해 더 빠르고 쉽게 세상을 읽는 플랫폼",
    period: "2025. 5. 30 - 2025. 6. 19",
    techStack: "Vue.js, TypeScript, TailwindCSS",
    linkTo: "/projects/newsdocs",
    className: "",
    imageSrc: "src/assets/img/newsdocs-mockup.png",
    imageClassName: "max-w-[1356px] ",
    imageContainerClassName: "absolute right-0 top-1/2 -translate-y-1/2",
  },
];
