import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Entrance from "./components/Entrance.jsx";
import Arrival from "./sections/Arrival.jsx";
import InvitationSection from "./sections/InvitationSection.jsx";
import Details from "./sections/Details.jsx";
import HomeLocation from "./sections/HomeLocation.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const listener = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="grain" />
      <Entrance reduceMotion={reduceMotion} />
      <Nav />
      <main>
        <Arrival reduceMotion={reduceMotion} />
        <InvitationSection reduceMotion={reduceMotion} />
        <Details />
        <HomeLocation reduceMotion={reduceMotion} />
      </main>
      <Footer />
    </div>
  );
}
