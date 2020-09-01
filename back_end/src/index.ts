import * as express from "express"
import * as dotenv from 'dotenv'

dotenv.config();

//console.log(process.env.DB_USER)

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}

const app = new App().application;

app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("start");
})

app.listen(4000,()=>console.log("start"));