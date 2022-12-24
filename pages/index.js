import  Slides  from "../elements/home/Slides";
import  Products  from "../elements/home/Products";

//({color, data, shopDsc})
let siteConfig = {
  logo: "Float",
  color: "red",
  btnColor: "orange",
  about: "we sale all kinds of laptop, tablets and we also supply hole sale etc",
  shopDsc:"We sale all types of laptop and tablets",
  categories:[
       {
         category: "laptop",
         imgurl: "/img/img4.png"
       },
       {
         category: "Tablets",
         imgurl: "/img/img5.png"
       }
  ]
  
}

//({prodImgmg, name, price, productDsc, btnColor})
//fill this with product from database limit to 20
const products = [
  {
        id:"a1",
        name:"dell 640",
        price:50000,
        dsc:"Intel 64 bits os",
        category:"laptops",
        qty: 1,
        img: "/img/img4.png"
},
{
     id:"g2",
     name:"dell 640",
     price:50000,
     dsc:"Intel 64 bits os",
     category:"smart watches",
     qty: 1,
     img: "/img/img5.png"
  },
  {
     id:"u63",
     name:"dell 640",
     price:50000,
     dsc:"Intel 64 bits os",
     category:"electronics",
     qty: 1,
     img: "/img/img6.jpg"
  }
];

const Home = () => {
            return (
              <>
                <Slides 
                  color={siteConfig.color} 
                  categories={JSON.stringify(siteConfig.categories)}
                  shopDsc={siteConfig.shopDsc}
                />
                <Products 
                  products={JSON.stringify(products)} 
                  btnColor={siteConfig.btnColor} 
                />
              </>
          )
    }
export default Home;