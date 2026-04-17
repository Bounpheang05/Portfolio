
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className=" h-80 text-center border-t border-gray-700 pt-5  ">
      <div className="space-y-4">
        <h1 className="text-white">Bounpheang Khampanyakhoun </h1>
        <h2 className="text-text-muted text-lg shadow">Junior dev who are learning to become software engineer soon </h2>
        <p></p>
      </div>
      <div className="flex  justify-center text-2xl text-white gap-5 ">
        <FaGithub className="text-5xl hover:text-cyan-400 transition cursor-pointer"/>
        <SiGmail className="text-5xl hover:text-cyan-400 transition cursor-pointer"/>
        <FaFacebook className="text-5xl hover:text-cyan-400 transition cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
