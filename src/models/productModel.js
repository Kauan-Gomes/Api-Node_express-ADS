import db from '../database/db.js'

const list = async () => {
    return await db.query('SELECT * FROM products')
}

const get = async (id) => {
    return await db.query('SELECT * FROM products WHERE id = ?', [id])
}

const create = async (product) => {
    const {name, preco} = product
    return await db.query('INSERT INTO products (name, preco ) VALUES (?, ?)', [name, preco])
}

const update = async (product) => {
    const {id ,name, preco} = product
    return await db.query('UPDATE products SET name = ?, preco = ? WHERE id = ?;', [name, preco, id])

}
const del = async (id) => {
    return await db.query('DELETE FROM products WHERE id = ?;',  [id])
}

export default {list, get, create, update, del}