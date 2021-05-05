const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  
  const rows = await db.query(
    `SELECT * FROM todo `
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(resbody){
    const result = await db.query(
      `INSERT INTO todo 
      (todotext , status)
      VALUES 
      (?, ?)`, 
      [
        resbody.todotext, resbody.status
      ]
    );
  
    let message = 'Error in creating programming language';
  
    if (result.affectedRows) {
      message = {'message':'Todo created successfully','data':result.insertId};
    }
  
    return {message};
}

async function update(id, resbody){
    const result = await db.query(
      `UPDATE todo
      SET todotext=?, status=? 
      WHERE id=?`, 
      [
        resbody.todotext, resbody.status,id
      ]
    );
  
    let message = 'Error in updating todo';
  
    if (result.affectedRows) {
      message = 'todo updated successfully';
    }
  
    return {message};
}


async function remove(id){
    const result = await db.query(
      `DELETE FROM todo WHERE id=?`, 
      [id]
    );
  
    let message = 'Error to delete todo';
    if (result.affectedRows) {
      message = 'todo deleted successfully';
    }
    return {message};
}
  


module.exports = {
  getMultiple,
  create,
  update,
  remove
}