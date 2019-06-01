class ItemRepository {  
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      imgPath TEXT,
      description TEXT,
      price FLOAT)`
    console.log('Table created')
    return this.dao.run(sql)
  }
	create(name, imgPath, description, price) {
    return this.dao.run(
      `INSERT INTO items (name, imgPath, description, price) VALUES  (?, ?, ?, ?)`,
      [name, imgPath, description, price])
  }
	getAll() {
    return this.dao.all(`SELECT * FROM items`)
  }
  getById(id) {
    return this.dao.get(
      `SELECT * FROM items WHERE id = ?`,
      [id])
  }
}

module.exports = ItemRepository;  