import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <div className="max-h-screen min-h-screen  max-w-md mx-auto flex flex-col bg-secondary overflow-hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
