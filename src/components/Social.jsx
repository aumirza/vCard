import GitHub from "../icons/github.svg";
import Twitter from "../icons/twitter.svg";
import LinkedIn from "../icons/linkedin.svg";
import Instagram from "../icons/instagram.svg";
import Facebook from "../icons/facebook.svg";
import Dribble from "../icons/dribble.svg";
import Behance from "../icons/behance.svg";

export const Social = () => {
  return (
    <div className="my-1 w-full flex justify-around">
      <div className="flex">
        <div className="flex items-center">
          <img className="mx-0.5 h-5 w-5" src={GitHub} alt="" />
          <img className="mx-0.5  h-5 w-5" src={Behance} alt="" />
          <img className="mx-0.5  h-5 w-5" src={Dribble} alt="" />
          <img className="mx-0.5  h-5 w-5" src={Instagram} alt="" />
          <img className="mx-0.5  h-5 w-5" src={LinkedIn} alt="" />
        </div>
        <div className="ml-1">
          <span className="text-white">aumirza</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <img className="mx-0.5 h-5 w-5" src={Facebook} alt="" />
          <img className="h-5 w-5" src={Twitter} alt="" />
        </div>
        <div className="ml-1">
          <span className="text-white">AhmadullahMirza</span>
        </div>
      </div>
    </div>
  );
};
