const shipperData = require('./shippers-model'); 

module.exports = {
  checkId,
  checkPayload,
}

async function checkId(req, res, next) {
  try {
    const res = await shipperData.getById(req.params.id);
    if (!res) {
      next({status : 404, message : `could not find shipper with id ${req.params.id}`})
    } else {
      next(); 
    }
  } catch (err) {
    next(err)
  }
}

async function checkPayload(req, res, next) {
  try {
    const {shippername,phone} = req.body;
    console.log(shippername,phone)
    if (!shippername || !phone) {
      next({status : 422, message : "need shippername and phone number for complete post"})
    } else {
      next(); 
    }
  } catch (err) {next(err)}
}
