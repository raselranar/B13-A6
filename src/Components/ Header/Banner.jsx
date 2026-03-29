import bannerImage from "../../assets/banner.png";
import playButtonImage from "../../assets/Play.png";
export default function Banner() {
  return (
    <div className="hero bg-base-200  container mx-auto ">
      <div className="hero-content gap-18  flex-col lg:flex-row-reverse ">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="font-extrabold text-7xl text-[#101727]/93">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className="py-6 text-gray-500 text-lg max-w-150">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <button className="btn py-6  text-base rounded-full text-white bg-primary-gradient">
            Explore Products
          </button>
          <button className="btn btn-outline py-6  text-base rounded-full bg-primary-gradient bg-clip-text text-transparent">
            <img src={playButtonImage} alt="Play button image" />
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}
