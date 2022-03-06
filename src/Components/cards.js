// import card from "../data/products.json"
// console.log(card);

const Card = (props) => {
    return (
        <figure>
            <img src={props.img} alt="" />
            <figcaption>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <button>BUY NOW</button>
            </figcaption>
        </figure>
    )

}

export default Card 