const clientsRepository = require('./db/clients-repository.js');
// get all clients of a specific brand function:
const getAllClientsByBrand =
  async (req, res) => {
    const brand_id = parseInt(req.params.brand_id);
    try {
        const clients = await clientsRepository.getUsingStoredProcedure(brand_id);
        res.json(clients);
    } catch (err) {
        res.status(500).send('Error fetching clients');
    }
  }

module.exports.getAllClientsByBrand = getAllClientsByBrand;
// ======================

// get a specific client:
const getClientByID =
  async (req, res) => {
    const client_id = parseInt(req.params.client_id);
    try{
    let x = await clientsRepository.getClientById(req.params.client_id);
    res.json(x);}
    catch (err) {
        res.status(500).send('Error fetching clients');
    }
  }


module.exports.getClientByID = getClientByID;
// ======================
// update a specific client:

const updateClient =
  async (req, res) => {
    const client_id = parseInt(req.params.client_id);
    const {first_name, last_name, email, phone_number } = req.body;
  
    try {
        const updateClients = await clientsRepository.putUsingStoredProcedure(client_id, first_name, last_name, email, phone_number);
        res.json(updateClients);
    } catch (err) {
        console.error('Error updating client:', err);
        res.status(500).send('Error updating client');
    }
  }

module.exports.updateClient = updateClient;

// ======================
//post a new client by brand:
const postNewClient =
  async (req, res) => {
    const brand_id = parseInt(req.params.brand_id);
    const { client_status, first_name, last_name, email, phone_number, client_id } = req.body;
  
    try {
        const postClient = await clientsRepository.postUsingStoredProcedure(brand_id, client_id, client_status, first_name, last_name, email, phone_number);
        res.json(postClient);
    } catch (err) {
        console.error('Error posting client:', err);
        res.status(500).send('Error posting client');
    }
  }

module.exports.postNewClient = postNewClient;
// ======================

//delete a client by ID:
const deleteAClientByID =
  async (req, res) => {
    const client_id = parseInt(req.params.client_id);
    try {
        const clients = await clientsRepository.deleteUsingStoredProcedure(client_id);
        res.json(clients);
    } catch (err) {
        res.status(500).send('Error deleting clients');
    }
  }

module.exports.deleteAClientByID = deleteAClientByID;

// ======================

