import Hero from "./Hero";
import "./handsUp.css";
import Services from "./Services";
import Commentary from "./Commentary";

export default function AboutUs() {
  return (
    <div>
      <div>
        <Hero />
        <Services />
      </div>
      <Commentary />
    </div>
  );
}
