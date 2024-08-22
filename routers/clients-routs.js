
const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clients-controller');


//========== use get all clients of a specific brand function from controller:

router.get('/:brand_id', clientsController.getAllClientsByBrand);

//=========== use get a specific client function from controller:
router.get('/clientbyid/:client_id', clientsController.getClientByID);

router.use(express.static('public'));

//=========== use put function (update a specific client function from controller):

router.put('/updateclients/:client_id', clientsController.updateClient);

//=========== use post a new client by brand function from controller:

router.post('/postclient/:brand_id',clientsController.postNewClient);

//=========== use delete a client by ID function from controller:

router.delete('/deleteclients/:client_id', clientsController.deleteAClientByID);

//=========================

module.exports=router;
