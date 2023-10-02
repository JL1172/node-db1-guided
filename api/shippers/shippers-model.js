const db = require("../../data/db-config");

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // const res = await db.raw("select * from shippers");
  const res = await db('shippers')
  // .select('shippername','phone')
  return res;
}

async function getById(shipperid) {
  /*select * from shippers where shipperid = 1*/
  const [shipper] = await db("shippers")
  .where({shipperid : shipperid});
  return shipper;
}

async function create() {
  /*insert into shippers (phone,shippername) values ('2324','arnold') */
  return 'create wired'
}

async function update() {
  /*update shippers set phone = 123, shippername = 'asdfsarnold' where shipperid = 1 */
  return 'update wired'
}

async function remove() {
  // delete from shippers where shipperid = 1
  return 'delete wired'
}
