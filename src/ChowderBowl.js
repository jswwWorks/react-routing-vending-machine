import { useNavigate } from "react-router-dom";

/**
 *  Props:
 *
 *  States:
 *
 *
 *  Renders:
 *    VendingMachine -> ChowderBowl
 *
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

      <hr></hr>
      <p>Want to buy something else?</p>

      <button onClick={handleClick}>Return to Vending Machine</button>
    </div>
  )

}

export default ChowderBowl;
{/* <p><Link to={`/vending-machine`}>Return to Vending Machine</Link></p> */}