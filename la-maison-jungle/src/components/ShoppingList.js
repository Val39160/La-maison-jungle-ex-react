import PlantList from "./PlantList";
import CareScale from "./CareScale";

function ShoppingList() {
  return (
    <ul>
      {PlantList.map((plant) => (
    <li key={ plant.id }>
        {plant.name}{plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
        <CareScale scaleValue={plant.light}/>
    </li>
))}
    </ul>
  )
}

export default ShoppingList;
