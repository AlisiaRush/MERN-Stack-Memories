import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

//Import and use postRoutes
app.use('/posts', postRoutes);

//Be Careful... BodyParser Deprecated
// app.use(bodyParser.json({limit:"30mb", extended:true}))
// app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
// app.use(cors());

//Use this instead
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded(
    {limit:"30mb", extended: true}
));
app.use(cors());

//https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://JavaScriptMastery:mdelyZ1bV0T8rfwh@cluster0.5thfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,() => console.log(`server running on port:${PORT}`)))
.catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false); // no warnings in the console