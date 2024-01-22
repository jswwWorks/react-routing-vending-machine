import Chardonnay from "./Chardonnay";
import MushroomRisotto from "./MushroomRisotto";
import ChowderBowl from "./ChowderBowl";
import Nav from "./Nav";
import { Navigate, BrowserRouter, Route, Routes, Link } from 'react-router-dom';


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

  // const navigate = useNavigate();

  return (
    <div>
      {/* <div>
        <p><Link to="/chowder-bowl">Would you like a chowder bowl?</Link></p>
      </div> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/chowder-bowl" element={<ChowderBowl/>} />
          <Route path="/mushroom-risotto" element={<MushroomRisotto/>} />
          <Route path="/chardonnay" element={<Chardonnay/>} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}
{/* <p><Link to="/chowder-bowl">Would you like a chowder bowl?</Link></p> */}

export default VendingMachine;