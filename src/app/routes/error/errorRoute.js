import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';
import styles from "./errorRoute.module.css"

function ErrorRoute() {
  return (
    <div className={styles.errorStyle}>
      <div><ErrorOutlineIcon /></div>
      <Typography>Something is wrong</Typography>
    </div>
  )
}

export default ErrorRoute