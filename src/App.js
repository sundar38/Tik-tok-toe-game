import logo from './logo.svg';
import './App.css';
import Icons from './Components/Icons';
import { useState } from 'react';
import './styles.css';
let tiktoktoearray= new Array(9).fill("");
function App() {
 
  let [isCross, setIsCross]=useState("true");
  let [winner, setWinner]=useState("");

  //play again- reload the game
  function playagain(){
    
    tiktoktoearray.fill("");
    console.log(isCross);
    setIsCross("true");   

    setWinner("");
  }


  //find winner
  function findwinner(){
    if(tiktoktoearray[0]==tiktoktoearray[1] && tiktoktoearray[1]==tiktoktoearray[2] && tiktoktoearray[0]!=""){
      setWinner(`${tiktoktoearray[0]} has won`);
    }
    if(tiktoktoearray[3]==tiktoktoearray[4] && tiktoktoearray[4]==tiktoktoearray[5] && tiktoktoearray[4]!=""){
      setWinner(`${tiktoktoearray[3]} has won`);
    }
    if(tiktoktoearray[6]==tiktoktoearray[7] && tiktoktoearray[7]==tiktoktoearray[8] && tiktoktoearray[6]!=""){
      setWinner(`${tiktoktoearray[6]} has won`);
    }
    if(tiktoktoearray[0]==tiktoktoearray[4] && tiktoktoearray[4]==tiktoktoearray[8] && tiktoktoearray[0]!=""){
      setWinner(`${tiktoktoearray[0]} has won`);
    }
    if(tiktoktoearray[2]==tiktoktoearray[4] && tiktoktoearray[4]==tiktoktoearray[6] && tiktoktoearray[6]!=""){
      setWinner(`${tiktoktoearray[2]} has won`);
    }
    if(tiktoktoearray[0]==tiktoktoearray[3] && tiktoktoearray[3]==tiktoktoearray[6] && tiktoktoearray[0]!=""){
      setWinner(`${tiktoktoearray[0]} has won`);
    }
    if(tiktoktoearray[1]==tiktoktoearray[4] && tiktoktoearray[4]==tiktoktoearray[7] && tiktoktoearray[7]!=""){
      setWinner(`${tiktoktoearray[1]} has won`);
    }
    if(tiktoktoearray[2]==tiktoktoearray[5] && tiktoktoearray[5]==tiktoktoearray[8] && tiktoktoearray[2]!=""){
      setWinner(`${tiktoktoearray[2]} has won`);
    }
    if(tiktoktoearray[0]==tiktoktoearray[4] && tiktoktoearray[4]==tiktoktoearray[8] && tiktoktoearray[0]!=""){
      setWinner(`${tiktoktoearray[0]} has won`);
    }
    
  }


  //change item

  function changeitem(index){
      if(tiktoktoearray[index]!=""){
        console.log("already filled");
      }
      else{
      tiktoktoearray[index]= isCross=true?"Cross":"Circle";
      setIsCross(!isCross);
      }
  }
  return (
    <div>
      {
        winner==""?(
          <div> Hey {isCross=="true"?"Cross":"Circle"} your turn</div>
        ): (
          <div>
          <h1>{winner}</h1>
          <button onClick={playagain}>Play Again</button>
          </div>
        )
      }
      <div className='grid'>{
            tiktoktoearray.map((index, value)=>(
              <div className='element' onClick={()=> changeitem(index)}>
                <Icons usericon={value}/>
              </div>
            ))
      }
      </div>
   </div>
   
  );
}

export default App;
