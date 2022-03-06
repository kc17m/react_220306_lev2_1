import products from "../data/products.json"
import Card from "./cards"

const CardSection = () => {
    return (
        <section> {
            products.map((item) =>
                < Card
                    name={item.name}
                    price={item.price}
                    img={item.img}
                />
            )
        }
        </section>
    )
}

export default CardSection

