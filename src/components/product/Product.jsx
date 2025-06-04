import "./Product.css"

function Product(props) {

    const { photoName: srcPhoto, name, description, price, soldOut } = props.product;
    return (
        <li className={soldOut ? "product sold-out" : "product"} >
            <img src={srcPhoto} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{price}</span>
            </div>
        </li >
    )
}

export default Product
