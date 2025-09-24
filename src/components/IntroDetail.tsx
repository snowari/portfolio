import profileImg from "../assets/img/profile.jpg";

const IntroDetail = () => {
  return (
    <div className=" w-full font-sofia flex flex-col mx-auto px-20">
      <h1 className="font-black text-[10vw] w-full justify-center leading-none">
        EUNSEOPORTFOLIO
      </h1>
      <div className="flex justify-center">
        <div className="flex items-end justify-center gap-10">
          <div className="flex flex-col text-2xl">
            <span>/CURIOUS</span>
            <span>/CREATIVE</span>
            <span>/PASSIONATE</span>
          </div>
          <div>
            <img src={profileImg} alt="myProfile" className="max-w-[650px]" />
          </div>
        </div>
        <div className="flex gap-3 text-3xl ml-10">
          <span>FRONT</span>
          <span>END</span>
          <span>DEVELOPER</span>
        </div>
      </div>
    </div>
  );
};

export default IntroDetail;
