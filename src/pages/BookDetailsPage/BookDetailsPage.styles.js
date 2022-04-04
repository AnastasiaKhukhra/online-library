import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    position: 'relative',
    padding: '50px 50px',
    textAlign: 'center',
    borderRadius: '20px',
    backgroundColor: 'rgb(204, 228, 255)',
    border: '2px solid #99c9ff'
  },
}));
