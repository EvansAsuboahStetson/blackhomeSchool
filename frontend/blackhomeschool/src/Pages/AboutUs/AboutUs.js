import Hero from "./Hero";
import "./handsUp.css";
import Services from "./Services";
import Commentary from "./Commentary";
import Rock from "../../components/assets/rocks.jpeg"

export default function AboutUs() {
  return (
    <div>
      <div>
        <Hero url={Rock} name="WHO WE ARE" />
        <Services />
      </div>
      <Commentary />
    </div>
  );
}
