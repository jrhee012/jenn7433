import homeControllers from './controllers/homeControllers';
import jennControllers from './controllers/jennControllers';

export default server => {
    server.get('/', homeControllers.index);
    server.get('/jenn', jennControllers.index);
    server.post('/jenn', jennControllers.post);
}
