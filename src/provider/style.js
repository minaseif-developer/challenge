// import withStyles from 'react-jss';

import { withStyles } from "@mui/styles";

// import { withStyles } from "@material-ui/styles";

// eslint-disable-next-line
export default (styles) => (component) =>
  withStyles
  (styles, { withTheme: true })(component);
