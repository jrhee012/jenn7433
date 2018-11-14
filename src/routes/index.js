import homeControllers from '../controllers/homeControllers';
import jenn from './jenn';
import rsv from './rsv';

export default server => {
    // root
    server.get('/', homeControllers.root);

    // jenn
    jenn(server);

    // reservations
    rsv(server);
}
