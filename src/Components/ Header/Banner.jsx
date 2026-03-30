import bannerImage from "../../assets/banner.png";
import playButtonImage from "../../assets/Play.png";
import GradientButton from "../UI/GradientButton";
import BadgeDot from "../../assets/badge_dot.png";
export default function Banner() {
  return (
    <div className="hero container mx-auto py-15">
      <div className="hero-content gap-18  flex-col lg:flex-row-reverse ">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <div className="flex gap-3 px-4 py-2 w-fit rounded-full bg-[#E1E7FF]  items-center">
            <img src={BadgeDot} className="size-5 object-cover" />
            <span className="font-bold bg-primary-gradient bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="font-extrabold text-5xl/snug sm:text-6xl/snug  md:text-7xl/21 text-[#101727]/90">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className="py-6 text-gray-500 text-lg max-w-150">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-4">
            <GradientButton text="Explore Products" />
            <button className="border-2 rounded-full border-[#5746d6]">
              <a className="btn py-6  text-base rounded-full bg-primary-gradient bg-clip-text text-transparent font-bold">
                <img src={playButtonImage} alt="Play a image" />
                Watch Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
