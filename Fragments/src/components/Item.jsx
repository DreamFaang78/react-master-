import styles from "./Fooditems.module.css"
const Item = (props) => {
    return (
        <li key={props.foodItem} className={'${styles["kg-item"]} list-group-item'}>{props.foodItem}</li>
    );
};
export default Item;