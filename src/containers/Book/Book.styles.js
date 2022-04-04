import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px',
    marginRight: '10px'

  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  image: {
    width: '200px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '5px'
  },
  description: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  },
  button: {
    margin: '0 10px',
  },
}));
