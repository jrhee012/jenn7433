let pageMsg = 'i love you, jenn <3';

const sendRenderResponse = res => {
    const data = { jenn_msg: pageMsg };
    return res.status(200).render('pages/jenn/index', data);
}

export default {
    // index: (req, res) => res.status(200).send(pageMsg),
    index: (req, res) => sendRenderResponse(res),
    post: (req, res) => {
        console.log('jenn req params: ', req.params)
        console.log('jenn req body: ', req.body)
        console.log(req.query)
        console.log('req: ', req);
        const message = req.params.message || pageMsg;
        pageMsg = message;
        // return sendRenderResponse(res);
        return res.status(200)
    },
}