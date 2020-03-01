import React from 'react';
import './App.css';
import {questionsArr , answersArr, lettersArr} from './RiddlesArray.js'



class App extends React.Component{
  state={
    
    counter:0,
    question: questionsArr,
    answer:answersArr,
    letters:lettersArr,
    rightLetters:[],
    wrongLetters:[],
    errorCounter:0,
    visibility:true,
    
  }

 testfunction=(event, letter) =>{
 let count=0
 this.setState({
   visibility:false
 })
   for(let i=0; i<this.state.answer[this.state.counter].length;i++){
    if(this.state.answer[this.state.counter][i].letter===letter){
    count++;
    }
  }
  if (count>0){
    this.state.rightLetters.push(letter);
  this.setState({rightLetters: this.state.rightLetters})
  }
  else{
    this.state.wrongLetters.push(letter)
    this.setState({wrongLetters:this.state.wrongLetters})
    this.setState({errorCounter: this.state.errorCounter+1})
  }
 
}

rightAnswer=()=>{

  let arr=this.state.answer[this.state.counter].map(element=>(element.letter))
  return(arr.every(letter=>(this.state.rightLetters.includes(letter))))
}

nextRiddle=event=>{

  let rightLetters=[]
  let wrongLetters=[]

  this.setState({
    
    counter:this.state.counter+1,
    rightLetters:rightLetters,
    wrongLetters:wrongLetters,
    errorCounter:0,
    visibility:true

  })
}

tryagain=(event)=>{
  let rightLetters=[];
  let wrongLetters=[];
    this.setState({
    counter:0,
    rightLetters:rightLetters,
    wrongLetters:wrongLetters,
    errorCounter:0,
    visibility:true
  })
    
  
}


Winning=()=>{
  if(this.state.counter===this.state.question.length-1 && this.rightAnswer()){

    return true
  }
  else
  return false
}



  render(){
    console.log(this.state.answer[this.state.counter].map(element=>(element.letter)))
    //console.log(this.state.answer[this.state.counter])
    return(
      <div>
        <h1>Riddle Me This</h1>
    <h3 id="score">questions: {this.state.counter+1}/{this.state.question.length}</h3>
    <h3 id="counter">Wrong attempts: {this.state.errorCounter}/5</h3>
        <div className="riddle-container">
    <p>"{this.state.question[this.state.counter]}"</p>
    <div className="word">{this.state.answer[this.state.counter].map(element=>(
      <div className="letter"key={element.id}>

        <div  style={this.state.rightLetters.includes(element.letter)? {display:"initial"}: {display:"none"}} id="L">{element.letter}</div>
        
        </div>))}</div>
      </div> 
      
      <div  style={  (this.state.wrongLetters.length>4 || (this.rightAnswer()))?  {display:"none"}: {display:"grid"}} className="guessing-letters">
      {this.state.letters[this.state.counter].map(element=>(
      <div className="letters" style={this.state.visibility===false && (this.state.wrongLetters.includes(element) || this.state.rightLetters.includes(element)) ? {display:"none"}:{display:"initial"}}  onClick={((e) => this.testfunction(e, element))} key={element}>{element}</div>))}
      </div>
      <section style={(this.rightAnswer()===false)||this.Winning() ?{display:"none"}:{display:"initial"}} className="winning-section">
      <h1 id="you-got-it" >YOU GOT IT!</h1>
      <button onClick={this.nextRiddle}  id="next-riddle-button" type="button"> Next Riddle  </button>
      </section>
      
      <section  className="losing-section" style={this.state.wrongLetters.length>4? {display:"block"}: {display:"none"}}>
      <h1 id="you-lost" >YOU LOST :(</h1>
        <button onClick={this.tryagain} id="try-again-button" type="button">Try Again  </button>
      </section>

      <section class="Winner" style={this.Winning()? {display:"initial"}:{display:"none"}}>
        <h3 id="you-won">YOU HAVE WON</h3>
      </section>
 
      </div>
    )
  }
}

export default App;
