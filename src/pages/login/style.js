import style from "../../provider/style";

const styles = (theme) => ({
  root: {
    background: "#fcfcfc",
    direction: "rtl",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img__logo: {
    width: 124,
    height: 124,
    margin: "0 auto",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  title__page: {
    "& h1": {
      color: "#000",
      fontSize: 24,
      fontWeight: 600,
      textAlign: "center",
      margin:'20px 0'
    },
  },
  cardBox: {
    boxShadow: "0px 0px 6px rgba(17, 17, 17, 0.1)",
    borderRadius: 20,
    padding: '64px 20px',
    background: "#fff",
    width:378,
  },
  form__item:{
    marginBottom:20
  }
});

export default style(styles);
