import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    '& .snackbarMessage': {
      fontFamily: 'Arial, Helvetica, sans-serif'
    },
    '& .snackbarIconsClose': {
      color: '#fff'
    },
    '& .snackbarIcons': {
      marginRight: 10,
    }

  },
}));

export default useStyles;
