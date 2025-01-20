import { MdErrorOutline } from "react-icons/md";
import Buttons from "./Buttons";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="px-6 py-4 space-y-10 lg:mx-componentMargin lg:px-10">
      <div className="dark:text-white space-y-6">
        <h1 className="text-3xl lg:text-[40px] sm:text-4xl font-normal font-sans">
          Welcome to CCExtractor
        </h1>
        <h2 className="text-xl sm:text-2xl font-normal font-sans">
          About CCExtractor (the software)
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          CCExtractor is the de-facto open source standard for closed captions /
          subtitles extraction from any media file. While the software itself
          belongs to the niche category (main users being universities, media
          companies, and enthusiasts), its output (meaning the .srt files it
          generates) is used by millions. If you've ever downloaded an external
          subtitle file for a TV show - most likely the original file came from
          CCExtractor.
        </p>

        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-normal font-sans">
            About CCExtractor Development (the organization)
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed">
            CCExtractor Development is an informal (meaning we're not
            incorporated anywhere) organization that exists to coordinate the
            development efforts of the volunteers that contribute to the
            software and to manage our participation in specific events such as
            Google Summer of Code and Code-In.
          </p>
        </div>
      </div>

      <div className="h-auto md:h-24 self-center relative dark:bg-hover rounded-md">
        <MdErrorOutline
          size={20}
          className="absolute  top-6 -left-2 z-10 rounded-full bg-yellow-600"
        />
        <div className="w-1 h-full bg-yellow-600 absolute "></div>
        <p className="ml-8 pt-6 pb-6 lg:text-xl dark:text-white text-sm sm:text-base font-normal leading-relaxed">
          This website is still in beta, and you might come across formatting
          errors or pages not found. Please report them on Slack.
        </p>
      </div>

      <div className="h-auto md:h-28 self-center relative dark:bg-hover rounded-md">
        <MdErrorOutline
          size={20}
          className="absolute  top-6 -left-2 z-10 rounded-full bg-green-600"
        />
        <div className="w-1 h-full bg-green-600 absolute "></div>
        <p className="ml-8  pt-6 pb-6 lg:text-xl dark:text-white  sm:text-base font-normal leading-relaxed">
          To get in touch with us, join our Slack channel. Most CCExtractor
          developers hang out in a Slack team. You're welcome to request an
          invitation <span className="text-green-600">here</span>.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 flex-wrap pb-9">
        <Buttons
          label={"Downloads"}
          color={"bg-green-500"}
          text={"text-white"}
        />
        <Buttons
          label={"Read The Docs"}
          color={"bg-white"}
          text={"text-black"}
        />
        <Buttons
          label={"Here For GSoC'2024"}
          color={"bg-white"}
          text={"text-black"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
