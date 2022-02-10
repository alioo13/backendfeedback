const getfeedbacks = "SELECT * FROM feedback";
const addfeedback = "INSERT INTO feedback (rate_experience,payment_satisfaction,customer_service_satisfaction,comment) VALUES ($1, $2, $3, $4)";


module.exports = {
    getfeedbacks,
    addfeedback,
}