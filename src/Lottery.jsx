import { useState } from "react"
import { genTicket ,sum} from "./helper"; 
import Ticket from "./Ticket";
import Button from "./Button";
// export default function Lottery({n =3,winningSum = 15}){
export default function Lottery({n =3,winCondition}){
    let [ticket ,setTicket] = useState(genTicket(n));
    // let isWinning = sum(ticket)===winningSum;
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>lottery game</h1>
            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <h3>{isWinning && "Congratulations ,you won!"}</h3> 
        </div>
    )
}