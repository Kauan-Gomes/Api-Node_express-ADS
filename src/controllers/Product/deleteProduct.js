import product from '../../models/productModel.js'

const deleteProduct = async (req, res)=>{   
    try {
        const id = req.body.id
        const [result] = await product.del(id)
        if (result.affectedRows === 1) {
            res.status(200).json({message: `Product id: ${id} Deleted`,})
        }
        else{
            res.status(404).json({
                message: `product id: ${id} Not Found`,

            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server Error' })
    }
}

export default deleteProduct