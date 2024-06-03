import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import qzone1 from '../../src/assets/qZone1.png'
import qzone2 from '../../src/assets/qZone2.png'
import qzone3 from '../../src/assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="px-2 mb-4">
        <h2 className="text-3xl font-bold mb-4">Login with</h2>
        <button className="btn btn-outline w-full mb-2 text-lg">
          <FcGoogle></FcGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full text-lg">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>

      <div className="px-2 mb-4">
        <h2 className="text-3xl font-bold mb-4">Find Us on</h2>
        <a href="" className="flex items-center text-lg gap-2 text-blue-600 border rounded-t-lg p-2">
            <FaFacebook></FaFacebook>
            Facebook
        </a>
        <a href="" className="flex items-center text-lg gap-2 text-sky-600 border-x p-2">
            <CiTwitter></CiTwitter>
            Twitter
        </a>
        <a href="" className="flex items-center text-lg gap-2 text-orange-400 border rounded-b-lg p-2">
            <FaInstagram></FaInstagram>
            Instagram
        </a>
      </div>

      <div className="px-2">
        <h1 className="text-3xl font-bold mb-4">Q Zone</h1>
        <img src={qzone1} alt="" className="w-4/5 mx-auto" />
        <img src={qzone2} alt="" className="w-4/5 mx-auto" />
        <img src={qzone3} alt="" className="w-4/5 mx-auto" />
      </div>
    </div>
  );
};

export default RightSideNav;
