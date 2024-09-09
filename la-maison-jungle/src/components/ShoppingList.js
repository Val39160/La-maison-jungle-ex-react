import PlantList from "./PlantList";

function ShoppingList() {
  return (
    <ul>
      {PlantList.map((plant) => (
    <li key={ plant.id }>
        {plant.name}{plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
    </li>
))}
    </ul>
  )
}

export default ShoppingList;
