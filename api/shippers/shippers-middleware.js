const db = require("../../data/db-config");

module.exports = {
  checkId,
  checkPayload,
}

async function checkId(req, res, next) {
  try {
    const res1 = await db("shippers").where({shipperid : req.params.id}).first(); 
    if (!res1) {
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
    if (!shippername || !phone) {
      next({status : 422, message : "need shippername and phone number for complete post"})
    } else {
      next(); 
    }
  } catch (err) {next(err)}
}
