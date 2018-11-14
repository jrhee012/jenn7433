import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './routes';

const env = process.env.NODE_ENV || 'dev';

// set views directory
let viewsPath = './src/views';
let publicPath = __dirname + '/public';
if (env === 'production') {
    viewsPath = './build/src/views';
    publicPath = __dirname + '/public';
}
console.log(publicPath)
const server = express();

// use ejs for view engine for express server
server.set('views', path.resolve(viewsPath));
server.set('view engine', 'ejs');

// middleware
server.use(express.static(publicPath));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(morgan('[:date[iso]] :method :url :status :response-time ms :remote-addr :remote-user'));

router(server);

export default server;
