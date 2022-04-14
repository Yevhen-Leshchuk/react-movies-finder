import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <Spinner className={s.Loader} animation="grow" variant="info"></Spinner>
  );
};

export default Loader;
