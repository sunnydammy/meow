const mysql = require("mysql");
const config = require("../config/db_config");
const logger = require('../logger');
const { ErrorHandler } = require('../error/error');

const pool = mysql.createPool(config);
logger.info('Connection pool created');

pool.on('acquire', function (con) {
    logger.info(`Connection ${con.threadId} acquired`);
});

pool.on('enqueue', function () {
    logger.info('Waiting for available connection slot');
});

pool.on('release', function (con) {
    logger.info(`Connection ${con.threadId} released`);
});

const connect = async function (callback) {
    pool.getConnection(function (err, con) {
        // if (err) {
        //     throw new ErrorHandler(404, 'A Connection failed.'); // todo:나중에 상태 정의하기
        // }
        // else {
        callback(err, con);
        con.release();
        // }
    });



}

const transaction = async function (callback) {
    pool.getConnection(function (err, con) {
        try {
            pool.beginTransaction();
            callback(err, con);
        }
        catch {
            logger.error(err.message);
            con.rollback();
            throw err;
        }
        finally {
            con.release();
        }
    });
}

module.exports = { connect, transaction };
// module.exports = connect;