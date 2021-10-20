import React from "react";
import "./cellItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faHome } from "@fortawesome/free-solid-svg-icons";

function CellItem({ currentPosition, rowIndex, columnIndex, path }) {
  let subSc;
  let feedback;

  for (let i = 0; i < path.length; i++) {
    const [r, c] = path[i].coord;
    if (r === rowIndex && c === columnIndex) {
      subSc = i + 1;
      feedback = path[i].state;
    }
    <i class="fas fa-robot"></i>;
  }

  const [lastR, lastC] = path[path.length - 1].coord;

  let positionElement = (
    <div className="position">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  );
  const [r, c] = path[currentPosition].coord;
  if (r === rowIndex && c === columnIndex) {
    positionElement = (
      <div className="position">
        <FontAwesomeIcon icon={faRobot} />
      </div>
    );
  }

  let homeElement;
  if (rowIndex === lastR && columnIndex === lastC) {
    homeElement = <FontAwesomeIcon icon={faHome} />;
  }

  return (
    <div className="cell-container">
      {homeElement ? homeElement : positionElement}
      <div className="feedback">{feedback}</div>
      <div className="subscript">
        <div className="subinner">{subSc}</div>
      </div>
    </div>
  );
}

export default CellItem;
