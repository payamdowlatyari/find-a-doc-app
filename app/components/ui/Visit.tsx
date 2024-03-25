import { FcVideoCall } from "react-icons/fc";
import { FaUserDoctor } from "react-icons/fa6";
import { Tooltip } from "@nextui-org/react";

// video icon with tooltip animation effect
export const Video = ({ visit }: any) => {
  if (visit.includes("video"))
    return (
      <Tooltip content="video appointments">
        <span className="text-xl">
          <FcVideoCall />
        </span>
      </Tooltip>
    );
};

// office icon with tooltip animation effect
export const Office = ({ visit }: any) => {
  if (visit.includes("office"))
    return (
      <Tooltip content="office appointments">
        <span className="text-base">
          <FaUserDoctor />
        </span>
      </Tooltip>
    );
};
