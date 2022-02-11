const pool = require('./db');
const queries = require('./queries');

const getfeedback = (req , res) => {
    pool.query(queries.getfeedbacks, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addfeedback = (req, res) => {
    const { rate_experience,
        payment_satisfaction,
        customer_service_satisfaction,
        comment} = req.body;
        pool.query(queries.addfeedback, [rate_experience,
            payment_satisfaction,
            customer_service_satisfaction,
            comment], (error, results) => {
                if(error) throw error ;
                res.status(201).send("feedback added successfuly !");
            });
        };


module.exports = {
    getfeedback,
    addfeedback,

}