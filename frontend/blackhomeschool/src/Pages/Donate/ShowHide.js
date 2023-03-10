import { Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import "./ShowHide.css";
import { AiOutlineUp } from "react-icons/ai";

export default function ShowHide({ title, icon, components }) {
  const [isOpened, setIsOpened] = useState(false);
  console.log(components);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div className="showHide">
      <div className="boxyContainer">
        <div className="boxTitle" onClick={toggle}>
          <div className="text titless">{title}</div>
          <div className="icon">
            {isOpened ? (
              icon
            ) : (
              <div className="icon">
                <Icon as={AiOutlineUp} color={"gray.500"} w={5} h={5} />
              </div>
            )}
          </div>
        </div>
        {isOpened && <div className="boxContent text">{components}</div>}
      </div>
    </div>
  );
}
