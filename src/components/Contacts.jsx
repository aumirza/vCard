import web from "../icons/web.svg";
import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";

export const Contacts = () => {
  return (
    <div className="my-8">
      <div className="flex">
        <div className="pt-5  px-3 rounded-t-lg bg-primary">
          <img className="h-6 w-6" src={phone} alt="" />
        </div>
        <div className="pt-5 ml-2">
          <span>+919956763804</span>
        </div>
      </div>
      <div className="flex">
        <div className="py-3 px-3 bg-primary">
          <img className="h-6 w-6" src={web} alt="" />
        </div>
        <div className="pt-3 ml-2">
          <span>https://ahmadullah.in</span>
        </div>
      </div>
      <div className="flex">
        <div className="bg-primary  px-3  pb-5 rounded-b-lg">
          <img className="h-6 w-6" src={mail} alt="" />
        </div>
        <div className="ml-2">
          <span>mail@ahmadullah.in</span>
        </div>
      </div>
    </div>
  );
};
