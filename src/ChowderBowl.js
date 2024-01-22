import { useNavigate } from "react-router-dom";
import ChowderBowlImg from "./chowder.jpeg";

/**
 *  Props: none
 *
 *  States: none
 *
 *
 *  Renders:
 *    Nav -> ChowderBowl
 *
 *  Shows picture of chowder and has option to return to homepage.
 */

function ChowderBowl() {
  console.log('ChowderBowl rendered');

  const navigate = useNavigate();

  // Returns user to vending machine (the homepage)
  function handleClick() {
    navigate("/")
  }

  return (
    <div className="ChowderBowl">
      <p>Chowder bowl</p>
      <img src={ChowderBowlImg} alt="chowder bowl"></img>

      <hr></hr>
      <p>Want to buy something else?</p>

      <button onClick={handleClick}>Return to Vending Machine</button>
    </div>
  )

}

export default ChowderBowl;