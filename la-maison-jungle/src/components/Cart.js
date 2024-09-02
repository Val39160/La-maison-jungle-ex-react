
function Cart () {
  const MonsteraPrice = 8;
  const LierrePrice = 10;
  const BouquetPrice = 15;
  const TotalPrice = MonsteraPrice + LierrePrice + BouquetPrice
  return (<div>
      <h2> Panier </h2>
      <ul>
      <li> Monstera : {MonsteraPrice} € </li>
      <li> Lierre : {LierrePrice} € </li>
      <li> Bouquet de fleurs : {BouquetPrice} € </li>
        </ul>
     <h3>Prix Total = {TotalPrice} € </h3>
      </div>
        )
}

export default Cart;
