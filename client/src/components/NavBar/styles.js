import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 30px',
    justifyContent: 'space-between',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '0px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '200px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    marginRight: '20px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  appBarLinks: {
   
    margin: '3px',
    padding: '3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '20px',
    '&:hover': {
      color: "grey",
   },
  },
}));