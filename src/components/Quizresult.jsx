/* eslint-disable react/prop-types */

// import Quizresult from './Quizresult';
// import { QuizData } from './Quizdata';

function Quizresult({score,totalScore ,tryAgain}) {
  return (
    <>
      <div className="show-score"> 
        <div>Your Score: {score}<br/>
        Total Score: {totalScore}</div>
      </div>
       <button id="next-button" onClick={tryAgain}>Try again</button> 
    </>
  );
}

export default Quizresult;
