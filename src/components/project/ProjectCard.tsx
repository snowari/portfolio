import AnimationLink from "../ui/AnimationLink";
import { HiArrowRight } from "react-icons/hi2";

import { type Project } from "../../data/project";

const ProjectCard = ({
  projectNumber,
  serviceName,
  description,
  period,
  techStack,
  linkTo,
  className = "",
  imageClassName = "",
  imageContainerClassName = "",
  imageSrc,
}: Project) => {
  const formattedNumber = projectNumber.toString().padStart(2, "0");
  return (
    <div
      className={`w-full relative h-screen flex items-center justify-center px-40 py-24 font-pretendard ${className}`}
    >
      <div className="flex flex-row items-center gap-16 w-full h-full">
        <div className="flex flex-col px-10 py-10 rounded-3xl bg-white/25 z-50 ">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold">{`[${formattedNumber}]`}</p>
            <h1 className="font-extrabold text-[52px]">{serviceName}</h1>
            <h3 className="text-2xl font-semibold">{description}</h3>
            <div className="w-[280px] my-10">
              <AnimationLink
                text="VIEW MORE"
                icon={<HiArrowRight className="text-2xl" />}
                hoveredIcon={<HiArrowRight className="text-2xl" />}
                to={linkTo}
                className="font-pretendard"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-base mt-auto">
            <div className="flex gap-4">
              <span>📅 프로젝트 기간</span>
              <span>{period}</span>
            </div>
            <div className="flex gap-4">
              <span>🛠️ 기술 스택</span>
              <span>{techStack}</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 이미지 영역 */}

        {imageSrc && (
          <div
            className={`flex-shrink-0 flex items-center ${imageContainerClassName}`}
          >
            <img
              src={imageSrc}
              alt={`${serviceName} project preview`}
              className={`object-cover  ${imageClassName}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
