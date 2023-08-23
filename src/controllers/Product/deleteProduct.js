import product from '../../models/productModel.js'

const deleteProduct = async (req, res)=>{   
    try {
        const [rows, fields] = await product.list()
        if (rows.length === 0) {
            res.status(404).json({message: 'Users not found'})
        } else {
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default deleteProduct