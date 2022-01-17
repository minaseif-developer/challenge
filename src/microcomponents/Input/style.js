import style from "../../provider/style";

const styles = (theme) => ({
  root: {
    borderRadius: 40,
    direction: "rtl",
    '& [class~="MuiOutlinedInput-root"]': {
      borderRadius: 40,
      direction: "rtl",
    },
  },
});

export default style(styles);
