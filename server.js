var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
var LoginCtrl = require('./controllers/loginCtrl/LoginCtrl');
var UserCtrl = require('./controllers/usrCtrl/UserCtrl');
var CarCtrl = require('./controllers/carCtrl/CarCtrl');

var route = express.Router();
route.get('/', function(req, res) {
    res.send("Hello World!");
});
app.use(route);

var bansacarApi = express.Router();

bansacarApi.route('/v2/login/logadoUsuario')
    .post(LoginCtrl.logadoUsuario);

//USERCTRL
bansacarApi.route('/v2/usuario/alta')
    .post(UserCtrl.alta);
bansacarApi.route('/v2/usuario/cambioPin')
    .post(UserCtrl.cambioPin);
bansacarApi.route('/v2/usuario/editar')
    .put(UserCtrl.editar);


//CARCTRL
bansacarApi.route('/coches/avemante')
    .get(CarCtrl.cocheAvemante);
bansacarApi.route('/coches/talleres')
    .get(CarCtrl.talleres);
bansacarApi.route('/v2/coches/conductor')
    .post(CarCtrl.conductorCoche);
bansacarApi.route('/v2/coches/mis_coches')
    .post(CarCtrl.misCoches);
bansacarApi.route('/v3/coches/detalles')
    .get(CarCtrl.detalles);
bansacarApi.route('/v3/coches/seguimiento_pedido')
    .get(CarCtrl.detalles);


app.use('/api',bansacarApi);

app.listen(9000, function() {
  console.log("Node server running on http://mibaldi.ddns.net:9000");
});
