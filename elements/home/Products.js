
import Product from "./Pruduct"

/**
 * 
 * @products {*array of products containing the following [{name,id,price,dsc,category,img}] } param0
 * @btnColor {*Site button color} param1
 * @returns product box
 */
const Products = ({products, btnColor}) => {
    let parsedProduct = JSON.parse(products)
    return (
                <>
                    <section id="products" className="shop_section layout_padding">
                     <div className="container">
                      <div id="display-cat" className="row">
                        {
                            parsedProduct.map((product) =>
                                   <Product 
                                    key={product.id}
                                    name={product.name}
                                    img={product.img}
                                    dsc={product.dsc}
                                    price={product.price}
                                    btnColor={btnColor}
                                    product={JSON.stringify(product)}
                                   />
                            )
                        }
                       </div>
                      </div>
                    </section>
                    
                </>
            )
}
export default Products;