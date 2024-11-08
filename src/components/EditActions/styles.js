import { makeStyles } from "@mui/styles";

const useExampleStyles = makeStyles((theme) => ({
  contentRoot: {
    maxWidth: 60,
    "& .MuiList-root": {
      padding: 0,
    },
    "& .MuiCollapse-root": {},
  },
}));

export default useExampleStyles;
