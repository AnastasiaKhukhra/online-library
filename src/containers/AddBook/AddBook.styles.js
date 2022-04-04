import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '450px',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '35px'
  },
  textfield: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '15px',
  },
}));
