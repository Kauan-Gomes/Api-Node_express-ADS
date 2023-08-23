import db from '../database/db.js'

const list = async () => {
    return await db.query('SELECT * FROM products')
}

const get = async (id) => {
    return await db.query('SELECT * FROM products WHERE id = ?;', [id])
}

const create = async (user) => {
    const {name, email, pass} = user
    return await db.query('INSERT INTO products (name, email, pass) VALUES (?, ?, ?)', [name, email, pass])
}

const update = async (user) => {
    const {id ,name, email, pass} = user
    return await db.query('UPDATE products SET name = ?, email = ?, pass = ? WHERE id = ?;', [name, email, pass, id])

}
const del = async (id) => {
    return await db.query('DELETE FROM products WHERE id = ?;',  [id])

}

export default {list}