// export const index = (req, res) => res.render('pages/home');
// export const get = (req, res) => res.status(200).send('ok');

export default {
    root: (req, res) => res.status(200).render('pages/home'),
};
