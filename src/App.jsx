import { Contacts } from "./components/Contacts";
import { Social } from "./components/Social";

function App() {
  return (
    <>
      <div className="min-h-screen bg-secondary overflow-hidden">
        <div className="">
          <div className="py-5 flex justify-center items-end">
            <div className="h-48 w-48 shadow-lg rounded-full border-8 border-primary ">
              <img src="/profile-pic.png" alt="" />
            </div>
          </div>
          <div className="h-5 w-full bg-primary"></div>
        </div>
        <div className="bg-white">
          <div className="h-5 w-3/5 mx-auto rounded-br-xl rounded-bl-xl bg-primary"></div>
          <div className="py-5 flex flex-col items-center">
            <h1 className="text-2xl font-bold ">Ahmadullah Mirza</h1>
            <p className="text-primary">Web Developer</p>
          </div>
          <div className="flex">
            <div className="border flex-grow py-5">
              <Contacts />
            </div>
            <div className="border flex-grow">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
