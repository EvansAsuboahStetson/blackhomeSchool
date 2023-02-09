import React from "react";
import expo from "../assets/expo.mp4";
import "./Main.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <div className="vid">
        <video src={expo} autoPlay loop muted />
      </div>
      <div id="full-bg">
        <img
          className="big"
          src="https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg"
        />
      </div>

      <div className="content">
        <Button
          variant={"solid"}
          colorScheme={"facebook"}
          size={"lg"}
          fontFamily="sans-serif"
          padding={"6"}
        >
          Be a Donor
        </Button>
      </div>
    </div>
  );
};

export default Main;
