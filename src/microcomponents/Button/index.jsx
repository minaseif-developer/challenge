import CoreButton from "@mui/material/Button";
import style from "./style";

function Button({ classes, children, ...props }) {
  return (
    <CoreButton className={classes.button} {...props}>
      {children}
    </CoreButton>
  );
}

export default style(Button);
