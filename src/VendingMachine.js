import Nav from "./Nav";


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

  return (
    <div>
      <h2>Vending Machine! Grab a bite to eat</h2>
      <Nav />
    </div>
  );

}
{/* <p><Link to="/chowder-bowl">Would you like a chowder bowl?</Link></p> */}
{/* <Route path="/vending-machine" element={<VendingMachine/>}/> */}
{/* <Route path="/" element={<Navigate to="" />} /> */}



// <BrowserRouter>
// <Nav />
// <Routes>
//   <Route path="/chowder-bowl" element={<ChowderBowl/>} />
//   <Route path="/mushroom-risotto" element={<MushroomRisotto/>} />
//   <Route path="/chardonnay" element={<Chardonnay/>} />
//   <Route path="/vending-machine" element={<VendingMachine/>}/>
//   <Route path="/" element={<Navigate to="" />} />
// </Routes>
// </BrowserRouter>


export default VendingMachine;