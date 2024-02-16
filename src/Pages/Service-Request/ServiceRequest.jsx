import React from "react";
import { Graph } from "../Captain/Graph/Graph";
import { IoMdArrowDropup } from "react-icons/io";
import frame from "../images/Frame 26822.png";
import { Total } from "./Total/Total";
import { Default } from "./Default/Default";
import { GigCaptain } from "./GigmileCaptain/GigCaptain";

export const ServiceRequest = () => {
  return (
    <div className="cap">
      <div className="active-cap">
        <div className="graph">
          <Graph />
        </div>

        <div className="default">
          <Default />
        </div>

        <div className="gig-cap">
          <Total />
        </div>
      </div>

      <GigCaptain />
    </div>
  );
};
