import jennControllers from '../controllers/jennControllers';

export default server => {
    server.get('/jenn/reset', jennControllers.reset);
    server.get('/jenn', jennControllers.root);
    server.post('/jenn', jennControllers.post);
}
