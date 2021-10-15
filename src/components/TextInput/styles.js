import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    color: "#f3f4f5",
    "& input": {
      color: "#f3f4f5",
    },
  },
}));
