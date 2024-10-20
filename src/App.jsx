import Lottery from './Lottery'
import './App.css'
import { sum } from './helper';
function App() {

  // let winCondition = (ticket) =>{
  //   return sum(ticket) === 15;
  // } yaha pe props me function pass kar rhe hai agar futre me winning condition change krna hua toh es function ko bass edit krna hoga.
  let winCondition = (ticket) =>{  //function props me pass kr rhe hai..
    return ticket[0] === 0;
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
      {/* <Lottery n={3} winningSum={15}/> phele bala code probs me function nhi hai tab.*/}
        
    </>
  )
}

export default App
