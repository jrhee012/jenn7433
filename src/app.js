import server from './server';

const port = process.env.PORT || 1337;
const appName = 'test server';

server.listen(port, err => {
    if (err) console.log(err);

    console.log(`${appName} running on port: ${port}`);
})
