
const Card = (props) => {
    return (
        <figure>
            <img src={props.img} alt="" />
            <figcaption>
                <p>{props.productName}</p>
                <p>{props.preis}</p>
                <button>Buy Now</button>
            </figcaption>
        </figure>
    )
}
export default Card