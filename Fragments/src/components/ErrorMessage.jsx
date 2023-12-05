const ErrorMessage = () => {
    // let foodItems = ['Pulse', 'Green Vegetable', 'Chapati', 'Salad', 'Milk'];
    return <>
        {
            foodItems.length === 0 && <h3>I am Still Hungry</h3>
        }
    </>
}
export default ErrorMessage;