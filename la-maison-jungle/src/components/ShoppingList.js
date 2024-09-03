import PlantList from "./PlantList";

function ShoppingList() {
  return (
    <ul>
      {PlantList.map((plant, index) =>
       <li key={`${plant}-${index}`}>{plant}</li>
      )}
    </ul>
  )
}

export default ShoppingList;
