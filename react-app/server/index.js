import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import router from './routers/route.js';
//import noteRoute from './routers/noteRoute';

/** import connection file */
import connect from './database/connect.js';

const app = express()


/** app middlewares */
app.use(cors());
app.use(express.json());
config();


/** appliation port */
const port = process.env.PORT || 8080;


/** routes */
app.use('/api', router) /** apis */
//app.use('/api/note', noteRoute) /** apis */
app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})


/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
});