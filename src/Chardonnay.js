import { useNavigate } from "react-router-dom";

/**
 *  Props:
 *
 *  States:
 *
 *
 *  Renders:
 *    VendingMachine -> Chardonnay
 *
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

      <hr></hr>
      <p>Want to buy something else?</p>

      <button onClick={handleClick}>Return to Vending Machine</button>
    </div>
  )

}

export default Chardonnay;