import express from 'express';

const router = express.Router();

//http://locahost:5000/posts

router.get('/', (req,res) => {
 res.send('Port 5000 for posts is working!!!');
})


export default router;