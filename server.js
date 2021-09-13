const express = require('express');
const app = express();
const hbs= require('hbs');

//require('./hbs/helpers');

const port = process.env.PORT || 3000;



//Express HBS  view engine
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname +'/public/'));
//para los datos del formulario
app.use (express.urlencoded({extended:false}));
app.use(express.json());

//invoca variables de entorno
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'})

//motor de plantillas
app. set('view engine','hbs');
//bycryptjs
const bycryptjs= require('bcryptjs');

//session
const session= require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));
//conexion con la BD
//const connection = require('./database/databasepg');
//rutas
app.get('/', (req,res)=>{
    res.render('index');
});
app.get('/login', (req,res)=>{
    res.render('login');
});
app.get('/billetera', (req,res)=>{
    res.render('billetera');
});
app.get('/register', (req,res)=>{
    res.render('register');
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
console.log(getRandomInt(2000000, 68524800));
//Registracion
app.post('/register',async(req,res)=>{
    const user = req.body.username;
    const password =req.body.password;
    const nombre=req.body.firstName;
    const apellido=req.body.lastName;
    const email=req.body.email;
    const cedula=req.body.cedula;
    const telefono=req.body.telefono;
    const edad=req.body.edad;
    let passwordHash= await bycryptjs.hash(password,8);
    /*connection.query("INSERT INTO clientes values ($1,$2,$3,$4,$5,$6,$7,$8)", [cedula, nombre, apellido,telefono, edad, email, user, passwordHash],async (error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log('guardado con exito');
        }
    });*/
    res.render('register',{
        registro:true
    })
});

//Puerto
app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})