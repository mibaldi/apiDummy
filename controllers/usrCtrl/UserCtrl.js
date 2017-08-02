//USUARIO ALTA
exports.alta = function (req, res) {
	console.log('POST /v2/usuario/alta')
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };
	console.log(req.body);
    var body = req.body.altaUsuario;
	/*
	body
     {
     "apellidos": "string",
     "email": "string",
     "nif": "string",
     "nombre": "string",
     "pin": "string",
     "polseguridad": "string",
     "telefono": "string"
     }
	 */
	if (body.nif === '11111111H') {
		var response = {
		  };
		res.header('Auth-token','tokendummy');
		res.status(200).jsonp(response);
	 } else if (body.nif  === '11111111P'){
		return res.status(403).send(error);
	}else if(body.nif === '0'){
        return res.status(400).send(error);
	}else {
        return res.status(500).send(error);
	}
};

//USUARIO CAMBIO PIN
exports.cambioPin = function (req, res) {
    console.log('POST /v2/usuario/cambioPin')
    var token = req.header('Auth-token');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };
    console.log(req.body);
    var body = req.body.cambioPIN;


    /*
    body
     {
     "nif": "string",
     "pinantiguo": "string",
     "pinnuevo": "string"
     }
     */
    if (token !== 'tokendummy') {
        return res.status(500).send(error);
    }
    if (body.nif === '11111111H') {
        var response = {};
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if(body.nif === '0'){
        error.errorMessage = "400";
        return res.status(400).send(error);
    }else {
        error.errorMessage = "500";
        return res.status(500).send(error);
    }
};

//EDITAR
exports.editar = function (req, res) {
    console.log('PUT /v2/usuario/editar');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };
    var body = req.body.editarUsuario;
    /*
     {
     "apellidos": "string",
     "email": "string",
     "nif": "string",
     "nombre": "string",
     "telefono": "string"
     }
     */
    var token = req.header('Auth-token');
    console.log(req.body);
    if (token !== 'tokendummy') {
        return res.status(500).send(error);
    }
    if (body.nif === '11111111H') {
        var response = {};
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if (body.nif  === '11111111P'){
        error.errorMessage = '401';
        return res.status(401).send(error);
    }else if(body.nif === '0'){
        error.errorMessage = '400';
        return res.status(400).send(error);
    }else {
        error.errorMessage = '500';
        return res.status(500).send(error);
    }
}