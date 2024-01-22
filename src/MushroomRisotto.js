import { useNavigate } from "react-router-dom";
import risottoImg from "./risotto.jpeg";

/**
 *  Props: none
 *
 *  States: none
 *
 *  Renders:
 *    Nav -> MushroomRisotto
 *
 *  Shows picture of risotto and has option to return to homepage.
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
      <img src={risottoImg} alt="mushroom risotto"></img>

      <hr></hr>
      <p>Want to buy something else?</p>

      <button onClick={handleClick}>Return to Vending Machine</button>
    </div>
  )

}

export default MushroomRisotto;