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
            <div className="border flex-grow">
              <div className="flex">
                <div className="bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="">
                  <span>+919956763804</span>
                </div>
              </div>
              <div className="flex">
                <div className="bg-primary"></div>
                <div className=""></div>
              </div>
              <div className="flex"></div>
            </div>
            <div className="border flex-grow">social</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
