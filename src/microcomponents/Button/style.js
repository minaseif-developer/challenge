import style from "../../provider/style";

const styles = (theme) => ({
  button: {
    backgroundColor: "#878d96 !important",
    borderRadius: "40px !important",
    height: 49,
    color: "#fff !important",
    borderColor: "#878d96 !important",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#1192e8 !important",
      borderColor: "#1192e8 !important",
    },
    "&:active": {
      backgroundColor: "#0072c3 !important",
      borderColor: "#0072c3 !important",
    },
  },
});

export default style(styles);
