import { useNavigate } from "react-router-dom";

/**
 *  Props:
 *
 *  States:
 *
 *
 *  Renders:
 *    VendingMachine -> MushroomRisotto
 *
 */
function MushroomRisotto() {
  console.log('MushroomRisotto rendered');

  const navigate = useNavigate();

  // Returns user to vending machine (the homepage)
  function handleClick() {
    navigate("/")
  }

  return (
    <div className="MushroomRisotto">
      <p>Mushroom Risotto</p>

      <hr></hr>
      <p>Want to buy something else?</p>

      <button onClick={handleClick}>Return to Vending Machine</button>
    </div>
  )

}

export default MushroomRisotto;