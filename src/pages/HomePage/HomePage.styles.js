import { makeStyles } from '@mui/styles';
import backPhoto from '../../images/main-page.jpeg'

export const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${backPhoto})`,
    height: '100vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    width: '480px',
    marginTop: '50px',
    marginLeft: '20px',
    textAlign: 'center',
    borderRadius: '20px'
  },
  title: {
    marginTop: 0,
    marginBottom: '10px',
    fontSize: '50px',
  },
  text: {
    fontSize: '20px',
  },
}));
