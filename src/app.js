import server from './server';

const port = process.env.PORT || 1337;
const appName = 'JENN7433 SERVER';

server.listen(port, () => {
    console.log(`${appName} running on port: ${port}`);
})
