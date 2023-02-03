import { CoffeeStudy } from "./components/CoffeeStudy";
import { Footer } from "./components/Footer";
import { IntroSection } from "./components/IntroSection";

function App() {
  return (
    <main className="font-Oxygen w-screen h-auto bg-customYellowBg  pt-[2.5rem]">
      <IntroSection />
      <CoffeeStudy />
      <Footer />
    </main>
  );
}

export default App;
