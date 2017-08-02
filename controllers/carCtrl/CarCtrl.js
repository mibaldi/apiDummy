//Lista de averias
exports.cocheAvemante = function (req, res) {
	console.log('GET /coches/avemante')
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };
    var token = req.header('Auth-token');
    if (token !== 'tokendummy') {
        return res.status(401).send(error);
    }
    console.log(req.query);
	if (req.query.contrato === 'contratodummy') {
		var response = {
                "data": [
                    {
                        "descripcion": "string",
                        "fecha": "2017-08-01T17:29:08.704Z",
                        "kilometros": 0
                    }
                ],
                "moreResults": true,
                "pageNumber": 0,
                "pageSize": 0,
                "totalPages": 0
            }
        ;
		res.header('Auth-token','tokendummy');
		res.status(200).jsonp(response);
	 } else if(req.query.page > 10 ){
        return res.status(400).send(error);
	}else {
        return res.status(500).send(error);
	}
};

//Talleres
exports.talleres = function (req, res) {
    console.log('GET /coches/talleres')
    var token = req.header('Auth-token');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };

    if (token !== 'tokendummy') {
        return res.status(401).send(error);
    }
    if (req.query.anexo === '1') {
        var response = {
            "data": [
                {
                    "codigoPostal": "string",
                    "direccion": "string",
                    "horario": "string",
                    "localidad": "string",
                    "nombre": "string",
                    "provincia": "string"
                }
            ],
            "moreResults": true,
            "pageNumber": 0,
            "pageSize": 0,
            "totalPages": 0
        };
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if(req.query.page > 10){
        error.errorMessage = "400";
        return res.status(400).send(error);
    }else {
        error.errorMessage = "500";
        return res.status(500).send(error);
    }
};

//Conductor coche
exports.conductorCoche = function (req, res) {
    console.log('POST /v2/coches/conductor');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };
   var body = req.body.driverIn;
    var token = req.header('Auth-token');
    console.log(req.body);
    if (token !== 'tokendummy') {
        return res.status(403).send(error);
    }
    if (body.nif === '11111111H') {
        var response = [
            "string"
            ];
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if (body.nif  === '11111111P'){
        error.errorMessage = '401';
        return res.status(401).send(error);
    }else if(body.nif === '0'){
        error.errorMessage = '400';
        return res.status(400).send(error);
    }else if(body.anexo === '8' && body.marco === "10"){
        error.errorMessage = '404';
        return res.status(404).send(error);
    }
    else {
        error.errorMessage = '500';
        return res.status(500).send(error);
    }
};

//Mis coches
exports.misCoches = function (req, res) {
    console.log('POST /v2/coches/mis_coches');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };
    var body = req.body.myCarIn;
    var token = req.header('Auth-token');
    console.log(req.body);
    if (token !== 'tokendummy') {
        return res.status(401).send(error);
    }
    if (body.nif === '11111111H') {
        var response = {
            "data": [
                {
                    "anexo": "string",
                    "contrato": "string",
                    "descripcion": "string",
                    "marco": "string",
                    "matricula": "string"
                }
            ],
            "moreResults": true,
            "pageNumber": 0,
            "pageSize": 0,
            "totalPages": 0
        };
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if (body.nif  === '11111111P'){
        error.errorMessage = '401';
        return res.status(401).send(error);
    }else if(body.nif === '0'){
        error.errorMessage = '400';
        return res.status(400).send(error);
    }else if(body.anexo === '8' && body.marco === "10"){
        error.errorMessage = '404';
        return res.status(400).send(error);
    }
    else {
        error.errorMessage = '500';
        return res.status(500).send(error);
    }
};

//Detalles
exports.detalles = function (req, res) {
    console.log('GET /v3/coches/detalles');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };

    var token = req.header('Auth-token');
    console.log(req.query);
    if (token !== 'tokendummy') {
        return res.status(403).send(error);
    }
    if (req.query.contrato === 'contrato') {
        var response = {
            "accesorios": [
                "string"
            ],
            "color": "string",
            "descripcion": "string",
            "estadoContrato": "string",
            "extras": [
                "string"
            ],
            "fechaDisposicion": "string",
            "fechaMatriculacion": "string",
            "fechaPrevistaEntrega": "string",
            "fechaVencimiento": "string",
            "imagen": "string",
            "kilometrosAnio": 0,
            "marca": {
                "marca": "string",
                "modelo": "string",
                "version": "string"
            },
            "matricula": "string",
            "nombreImagen": "string",
            "opciones": [
                "string"
            ],
            "plazo": "string",
            "propiedad": "string",
            "servicios": [
                "string"
            ]
        };
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if (req.query.contrato  === 'contratoprohibido'){
        error.errorMessage = '401';
        return res.status(401).send(error);
    }else if(req.params.contratoerror === '0'){
        error.errorMessage = '400';
        return res.status(400).send(error);
    }
    else {
        error.errorMessage = '500';
        return res.status(500).send(error);
    }
};
//Seguimiento pedido
exports.seguimientoPedido = function (req, res) {
    console.log('GET /v3/coches/seguimiento_pedido');
    var error = {
        'code': 'string',
        'errorMessage': 'string'
    };

    var token = req.header('Auth-token');
    console.log(req.query);
    if (token !== 'tokendummy') {
        return res.status(403).send(error);
    }
    if (req.query.contrato === 'contrato') {
        var response = {
            "accesorios": [
                "string"
            ],
            "color": "string",
            "confirmacion": {
                "fechaOk": "string",
                "localidadEntrega": "string"
            },
            "contratoMarco": "string",
            "descripcionVehiculo": "string",
            "duracionContrato": 0,
            "entrega": {
                "fechaDisposicion": "string",
                "fechaPrevista": "string"
            },
            "extras": [
                "string"
            ],
            "fechaEntregaEstimada": "string",
            "fechaFirmaContrato": "string",
            "fechaValorResidual": "string",
            "formalizacion": {
                "fecha": "string",
                "vehiculo": "string"
            },
            "kmContratados": 0,
            "matriculacion": {
                "fecha": "string",
                "matricula": "string"
            },
            "numeroAnexo": "string",
            "opciones": [
                "string"
            ],
            "provinciaEntrega": "string",
            "servicios": [
                "string"
            ]
        };
        res.header('Auth-token','tokendummy');
        res.status(200).jsonp(response);
    } else if (req.query.contrato  === 'contratoprohibido'){
        error.errorMessage = '401';
        return res.status(401).send(error);
    }else if(req.params.contratoerror === '0'){
        error.errorMessage = '400';
        return res.status(400).send(error);
    }
    else {
        error.errorMessage = '500';
        return res.status(500).send(error);
    }
};