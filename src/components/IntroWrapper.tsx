import profileImg from "../assets/img/profile.jpg";

const IntroWrapper = () => {
  return (
    <div className=" w-full font-sofia flex flex-col mx-auto justify-center px-20 mt-[-240px]">
      <h1 className="font-black text-[12rem] w-full justify-center">
        EUNSEOPORTFOLIO
      </h1>
      {/* <div className="flex gap-3 text-2xl font-semibold justify-end">
        <span>FRONT</span>
        <span>END</span>
        <span>DEVELOPER</span>
      </div> */}
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

export default IntroWrapper;
