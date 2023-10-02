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

function checkPayload(req, res, next) {
  next()
}
