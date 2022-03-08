import Card from "./card"
import products from "../data/product.json"

const CardSection = () => {
    return (
        <section>
            {
                products.map((item) => <Card
                    img={item.img}
                    productName={item.productName}
                    preis={item.preis}

                />
                )}
        </section>
    )
}
export default CardSection