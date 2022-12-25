import Form from 'react-bootstrap/Form'

const SellectCart = ({ category, btnColor }) => {
    return(
        <h1>select cartegory</h1>
    )
}
export default SellectCart;

/**
 * 
 * <select className="form-select">
            <option value={"default"} defaultValue> one selected </option>
            <option> two </option>
        </select>
 * 
 * 
 * <div  class="dropdown">
             <button style="color:white; background:${homeColor.btn_colors};" className="btn  dropdown-toggle" type="button" data-toggle="dropdown">
               <span id="selectect-cat">All</span>
                <span class="caret"></span>
             </button>
             <ul class="dropdown-menu">
             ${category
             .map((cat,index) => 
                  <li key={index} id={cat} className="li li-cart">{cat}</li>
             )
             .join('\n')}
             </ul>
        </div>
 */