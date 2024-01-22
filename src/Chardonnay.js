import { useNavigate } from "react-router-dom";
import chardonnayImg from "./chardonnay.jpeg";

/**
 *  Props: none
 *
 *  States: none
 *
 *  Renders:
 *    Nav -> Chardonnay
 *
 *  Shows picture of Chardonnay and has option to return to homepage.
 */

function Chardonnay() {
  console.log('Chardonnay rendered');

  const navigate = useNavigate();

  // Returns user to vending machine (the homepage)
  function handleClick() {
    navigate("/")
  }

  return (
    <div className="Chardonnay">
      <p>Chardonnay</p>
      <img src={chardonnayImg} alt="chardonnay"></img>

      <hr></hr>
      <p>Want to buy something else?</p>

      <button onClick={handleClick}>Return to Vending Machine</button>
    </div>
  );
}

export default Chardonnay;