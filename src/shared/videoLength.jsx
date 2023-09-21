import React from "react";
import moment from "moment";

function videoLength({ time }) {
  const videoLengthInSeconds = moment()
    ?.startOf("day")
    ?.seconds(time)
    ?.format("H:mm:ss");

  return (
    <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </span>
  );
}

export default videoLength;
