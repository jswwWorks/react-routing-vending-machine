import Chardonnay from "./Chardonnay";
import MushroomRisotto from "./MushroomRisotto";
import ChowderBowl from "./ChowderBowl";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


/**
 *  Props: none
 *
 *  States:
 *
 *  Renders:
 *    App -> VendingMachine -> Chardonnay, ChowderBowl, or MushroomRisotto
 *
 */
function VendingMachine() {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <p><Link to="/chowder-bowl">Would you like a chowder bowl?</Link></p>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/chowder-bowl" element={<ChowderBowl/>} />
          <Route path="/mushroom-risotto" element={<MushroomRisotto/>} />
          <Route path="/chardonnay" element={<Chardonnay/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}
{/* <p><Link to="/chowder-bowl">Would you like a chowder bowl?</Link></p> */}

export default VendingMachine;