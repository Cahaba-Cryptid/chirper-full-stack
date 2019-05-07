import * as express from 'express';
import db from './db'
const router = express.Router();

router.get('/api/chirps', async (req, res) => {
    try { 
        res.json(await db.Chirps.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/chirps/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.one(req.params.id))[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/api/chirps', async (req, res) => {
    try {
        let userid = req.body.userid;
        let chirp = req.body.chirp;
        res.json(await db.Chirps.newChirp(userid, chirp));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/api/chirps/:id', async (req, res) => {
    try {
        res.json(await db.Chirps.delChirp(req.params.id))
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/api/chirps', async (req, res) => {
try {
    let id = req.body.id
    let chirp = req.body.chirp
    res.json(await db.Chirps.updateChirp(chirp, id));
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
});

export default router;