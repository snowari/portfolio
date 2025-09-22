import IntroWrapper from "../components/IntroWrapper";
import Proj1 from "../components/projectSection/Prog1";
import BackgroundEffect from "../components/ui/BackgroundEffect";
import BigTitleSection from "../components/BigTitleSection";
import Header from "../components/ui/Header";

const Home = () => {
  return (
    <div>
      <BackgroundEffect>
        <Header />
        <main>
          <section>
            <IntroWrapper />
          </section>
        </main>
        <BigTitleSection text="MY WORK" />
        <Proj1 />
      </BackgroundEffect>
    </div>
  );
};

export default Home;
