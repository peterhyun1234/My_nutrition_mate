import * as express from "express"
import * as dotenv from 'dotenv'

dotenv.config();


var sequelize = require('../models/index').sequelize;
sequelize.sync();

const { Person } = require('../models');

Person.create({
  name: "Tony",
  age: 25
});

Person.findAll({
  where: {
    name: "Tony"
  }
});

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