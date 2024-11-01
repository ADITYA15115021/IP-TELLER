import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use( cors() );


app.get('/', (req,res)=>{
    const Ip = req.ip;
    return res.status(200).json( { userIp : Ip} );
})

app.listen(port,()=>{ console.log( `server is listening on port ${port}` )});
