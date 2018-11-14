import rsvControllers from '../controllers/rsvControllers';

export default server => {
    server.get('/rsv', rsvControllers.root);
}
