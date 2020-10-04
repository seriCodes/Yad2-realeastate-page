import React from "react";
import { Button } from "./common/Button";
import { ContainersStructure } from "./ContainersStructure";
import { v1 as uuidv1 } from "uuid";
import { ModalStyler } from "./ModalStyler";
import { AccordionHandler } from "./AccordionHandler";

export const ResultPopAccordionButton = (props) => {
  const AccordionHandlerObj = new AccordionHandler();

  let detailsId = uuidv1();
  // "seller-details"
  const ContainersStructureObj = new ContainersStructure();
  const ModalStylerObj = new ModalStyler();

  React.useEffect(() => {});

  return (
    <div id={props.id} class="displayNone container_seller-details">
      <Button
        class1="button"
        class2="greenButton"
        callBack={() => {
          AccordionHandlerObj.toggleAcorddion(detailsId, 4, 4);
        }}
      >
        איש קשר
      </Button>
      <div class="seller-details" id={detailsId}>
        <div>{props.owner}</div>
        <div>{props.phoneNumber}</div>
      </div>
    </div>
  );
};
