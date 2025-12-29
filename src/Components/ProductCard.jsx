import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { addToCart } from "./Redux/Actions/cartActions";

export default function ProductCard({product}){
    const dispatch=useDispatch();
    return(
        <div className="Product">
            <img src={product.images?.[0]} alt="" />
            <h4>{product.title}</h4>
            <p>{product.price}$</p>
            <button onClick={()=>dispatch(addToCart(product))}>Add To cart</button>

            <Link to={`/products/${product.id}`}>Details</Link>

        </div>
    )
}