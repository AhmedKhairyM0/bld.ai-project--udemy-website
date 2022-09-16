import { Typography } from "@mui/material";
import React from "react";

import styles from "./style.module.css";

function IconLabeledComponent({ icon, label }) {
  return (
    <div className={styles.iconLabel}>
      {icon}
      <Typography> {label}</Typography>
    </div>
  );
}

export default IconLabeledComponent;
