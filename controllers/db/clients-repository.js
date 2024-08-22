const mssql = require('mssql');
const dbConnection = require('./dbConnection');
const appPool = dbConnection.appPool;

//============================get using stored procedeure:

const getUsingStoredProcedure = async (brand_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect()
            try {
                let results = await myConnectionPoolToDB.request()
                .input('brand_id', mssql.Int, brand_id)
                .execute('get_clients')

                console.log(results);
                resolve(results.recordset);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
}

module.exports.getUsingStoredProcedure = getUsingStoredProcedure;

//=======================================
const getClientById = async (client_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect()
            try {
                let results = await myConnectionPoolToDB.request()
                .input('client_id', mssql.Int, client_id)
                .execute('getAClientByID')

                console.log(results);
                resolve(results.recordset);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
}

module.exports.getClientById = getClientById;

//============================put using stored procedeure:

const putUsingStoredProcedure = async (client_id, first_name, last_name, email, phone_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect();
            console.log(`Connected to DB, executing stored procedure with client_id: ${client_id}`);
            try {
                let putresults = await myConnectionPoolToDB.request()
                    .input('client_id', mssql.Int, client_id)
                    .input('first_name', mssql.VarChar, first_name)
                    .input('last_name', mssql.VarChar, last_name)
                    .input('email', mssql.VarChar, email)
                    .input('phone_number', mssql.VarChar, phone_number)
                    .execute('UpdateClient');

                console.log('Stored procedure executed, results:', putresults);
                resolve(putresults.recordset);
            }
            catch (err) {
                console.log("Error while executing query: ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('Error connecting to DB: ', err);
            reject('Error connecting to DB: ', err);
        }
    });
};

module.exports.putUsingStoredProcedure = putUsingStoredProcedure;

//================================

const postUsingStoredProcedure = async (brand_id, client_id, client_status, first_name, last_name, email, phone_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect();
            console.log(`Connected to DB, executing stored procedure with brand_id: ${brand_id}`);
            try {
                let postresults = await myConnectionPoolToDB.request()
                    .input('brand_id', mssql.Int, brand_id)
                    .input('client_id', mssql.Int, client_id)
                    .input('client_status', mssql.VarChar(50), client_status)
                    .input('first_name', mssql.VarChar(255), first_name)
                    .input('last_name', mssql.VarChar(255), last_name)
                    .input('email', mssql.VarChar(255), email)
                    .input('phone_number', mssql.VarChar(50), phone_number)
                    .execute('PostClient');

                console.log('Stored procedure executed, results:', postresults);
                resolve(postresults.recordset);
            }
            catch (err) {
                console.log("Error while executing query: ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('Error connecting to DB: ', err);
            reject('Error connecting to DB: ', err);
        }
    });
};

module.exports.postUsingStoredProcedure = postUsingStoredProcedure;

//===================================

const deleteUsingStoredProcedure = async (client_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect()
            try {
                let results = await myConnectionPoolToDB.request()
                .input('client_id', mssql.Int, client_id)
                .execute('DeleteClient')

                console.log(results);
                resolve(results.recordset);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
}

module.exports.deleteUsingStoredProcedure = deleteUsingStoredProcedure;