function Product(props) {
    const { photoName: srcPhoto, name, description, price } = props.product;
    return (
        <li>
            <img src={srcPhoto} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{price}</span>
            </div>
        </li>
    )
}

export default Product
