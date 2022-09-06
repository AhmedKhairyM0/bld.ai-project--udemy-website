import React from "react";
import { Grid } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className={"loadingSpinner"}>
      <Grid
        height="110"
        width="110"
        color="#8f61a8"
        radius="12.5"
        ariaLabel="grid-loading"
      />
    </div>
  );
}

export default LoadingSpinner;
