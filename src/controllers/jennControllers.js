const defaultMsg = 'i love you, jenn <3';
let pageMsg = 'i love you, jenn <3';

const sendRenderResponse = res => {
    const data = { jenn_msg: pageMsg };
    return res.status(200).render('pages/jenn/index', data);
}

export default {
    root: (req, res) => sendRenderResponse(res),
    post: (req, res) => {
        let postMsg;
        try {
            postMsg = req.body['jenn-msg-input'];
            pageMsg = postMsg;
        } catch (e) {
            console.log('err: ', e);
        }
        return res.redirect('/jenn');
    },
    reset: (req, res) => {
        pageMsg = defaultMsg;
        return res.redirect('/jenn');
    },
};
