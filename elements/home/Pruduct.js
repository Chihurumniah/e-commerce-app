
/**
 * 
 * @name {*product name} param0
 * @img {*product image} param1
 * @dsc {*product description} param2
 * @price {*product price} param3
 * @btnColor {*product price} param4
 * @product {*complete product object containing {name, img, dsc, price} to be saved to local storage } params
 * @returns product box
 */
const Product = ({name, img, dsc, price, btnColor, product}) => {
        return (
            <div id="products" className="col-md-6 ">
            <div className="box">
            <div  className="img-box">
                <img  src={ img } alt="" />
            </div>
            <div className="detail-box">
                <h6>
                    { name }
                </h6>
            </div>
            <div>
                <b>Description:</b> { dsc }
                <p>
                <b>Price:</b> #{ price }
                </p>
            </div>
            <div  className="add-to-cart btn-cat" id="${product.id}"  style={{ background: btnColor }} >Add To Cart</div>
            <div style={{ background: btnColor }} className="new">
                <span>
                    New
                </span>
            </div>
        </div> 
        </div>
        )
}
export default Product