exports.logadoUsuario = function (req, res) {
	console.log('POST /v2/login/logadoUsuario')
    var body = req.body.loginDatos;
	console.log(req.body);
	if (body.nif === '11111111H') {
		var response = {
		  	'apellidos': 'string',
		  	'email': 'string',
		  	'nif': 'string',
		  	'nombre': 'string',
		  	'telefono': 'string'
		  };
        res.header('Auth-token','tokendummy');
		res.status(200).jsonp(response);
	 } else if (body.nif  === '11111111P'){
		var error = {
            'code': 'string',
                'errorMessage': 'string'
        };
		return res.status(401).send(error);
	}else if(body.nif === '0'){
        var error = {
            'code': 'string',
            'errorMessage': 'string'
        };
        return res.status(400).send(error);
	}else {
        var error = {
            'code': 'string',
            'errorMessage': 'string'
        };
        return res.status(500).send(error);
	}
}