import style from "./provider/style";
import "./assets/fonts/font.css";
const styles = (theme) => ({
  "@global": {
    body: {
      fontFamily: "IRANYekan",
      direction: "rtl",
      overflowX: 'hidden',
      
    },
  },
  app: {
    direction: "rtl",
    height: "100vh",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      fontFamily: theme.typography.fontFamily,
    },
  },
});

export default style(styles);
