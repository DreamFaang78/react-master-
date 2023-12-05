import Item from "./Item"
const FoodItems = () => {
    let foodItems = ['Pulse', 'Green Vegetable', 'Chapati', 'Salad', 'Milk'];
    return (
        <ul>
            <ul className="list-group bg">
                {foodItems.map((item) => (
                    <Item key={item} foodItem={item} />
                ))}
            </ul>
        </ul>
    )
};
export default FoodItems;