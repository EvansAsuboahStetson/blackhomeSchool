import Hero from "./Hero";
import "./handsUp.css";
import Services from "./Services";
import Commentary from "./Commentary";

export default function AboutUs() {
  return (
    <div>
      <div>
        <Hero url={"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"} name="WHO WE ARE" />
        <Services />
      </div>
      <Commentary />
    </div>
  );
}
