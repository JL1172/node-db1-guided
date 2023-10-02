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
  const res = await db("shippers")
  .where({shipperid : shipperid}).first();
  return res;
}

async function create(shipper) {
  /*insert into shippers (phone,shippername) values ('2324','arnold') */
  const res = await db("shippers")
  .insert(shipper);
  const result = await getById(res);
  return result;
}

async function update() {
  /*update shippers set phone = 123, shippername = 'asdfsarnold' where shipperid = 1 */
  return 'update wired'
}

async function remove() {
  // delete from shippers where shipperid = 1
  return 'delete wired'
}
