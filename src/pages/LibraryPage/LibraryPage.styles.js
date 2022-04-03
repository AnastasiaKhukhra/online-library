import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    backgroundColor: '#e6f2ff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    // margin: '0 auto'
  },
  container: {
    width: '70%',
    marginTop: '50px',
    textAlign: 'center',
    borderRadius: '20px',
    position: 'relative',
    // paddingBottom: '50px'
  },
}));
