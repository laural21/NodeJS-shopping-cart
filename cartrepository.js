class CartRepository {  
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS cart (
        itemId INTEGER,
        CONSTRAINT cart_fk_itemId FOREIGN KEY (itemId)
          REFERENCES items(id))`
    return this.dao.run(sql)
  }
    create(itemId) {
    return this.dao.run(
      `INSERT INTO cart (itemId) VALUES (?)`,
      [itemId])
  }
  delete(itemId) {
    return this.dao.run(
      `DELETE FROM cart WHERE itemId = ?`,
      [itemId]
    )
  }
  getById(itemId) {
    return this.dao.get(
      `SELECT * FROM tasks WHERE itemId = ?`,
      [itemId])
  }
  getAll() {
    return this.dao.all(`SELECT * FROM cart`)
  }
}

module.exports = CartRepository; 