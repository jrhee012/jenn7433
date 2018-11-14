import server from './server';

// const port = process.env.PORT || 1337;
const appName = 'test server';

server.listen(process.env.PORT || 5000, () => {
    console.log(`${appName} running on port: ${process.env.PORT || 5000}`);
})
