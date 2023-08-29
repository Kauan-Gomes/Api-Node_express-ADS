import product from '../../models/productModel.js'

const createProduct = async (req, res)=>{   
    try{
        const [result] = await product.create(req.body)
        if(result.affectedRows === 1) {
            res.status(201).json({message: 'Product Created',
                Product:{
                    id: result.insertId,
                    ...req.body
                }
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export default createProduct