import { TextField } from "@mui/material";
import style from "./style";

function Input({ classes, ...props }) {
  return <TextField {...props} className={classes.root} />;
}

export default style(Input);
