const { MOngoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv//${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib() {
    constructor() {
        this.client = new MOngoClient(MONGO_URI, {userNewUrlParser: true});
        this.dbName = DB_NAME;
    }

    connect() {
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((ressolve, reject) => {
                this.client.connect(err => {
                    if(err){
                        reject(err)
                    }
                    console.log('Connected succesfully to mongo');
                    resolve(this.client.db(this.dbName));
                });
            }
        }
        return MongoLib.connection;
    }

    
}

module.exports = MongoLib;