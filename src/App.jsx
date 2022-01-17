import Login from "./pages/login";
import styles from "./styles";

function App({classes}) {
  return (
    <div className={classes.app} dir="rtl">
      <Login />
    </div>
  );
}
export default styles(App);
