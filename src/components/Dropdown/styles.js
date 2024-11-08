import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  listRoot: {
    boxShadow: '0 0 1px #ccc'
  },
  collapseRoot: {
    position: "absolute",
    width: "100%",    
    minWidth: 260,
    zIndex: 99,
    background: '#fff',
    boxShadow: '0 0 1px #ccc'
  },

}));

export default useStyles;
