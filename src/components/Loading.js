import React from "react";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  const overide = {
    position: "relative",
    left: "45%",
    right: "45%"
  };

  return (
    <div>
      <BounceLoader
        css={overide}
        size={150}
        sizeUnit={"px"}
        color={"#8b572a"}
      >Loading</BounceLoader>
    </div>
  );
};

export default Loading;
