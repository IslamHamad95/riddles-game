const Riddles=[
    //Riddle 1
    {
        question:"What has to be broken before you can use it?",
        answer:[{id:0, letter:"E"},{id:1, letter:"G"},{id:2, letter:"G"}],
        letters:["G","C","T","K","E","L","Q","A","R","F","X","W"]
    },
    //Riddle 2
    {
        question:"I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?",
        answer:[{id:1, letter:"F"},{id:2, letter:"I"},{id:3, letter:"R"},{id:4, letter:"E"} ],
        letters:["E","R","Y","K","X","I","A","W","Q","T","F","D"]
    },
    //Riddle 3
    {
        question:"The more of this there is, the less you see. What is it?",
        answer:[{id:1, letter:"D"},{id:2, letter:"A"},{id:3, letter:"R"},{id:4, letter:"K"},{id:5, letter:"N"},{id:6, letter:"E"},{id:7, letter:"S"},{id:8, letter:"S"} ],
        letters:["S","K","Q","A","B","L","N","U","R","J","D","E"]
    },
    //Riddle 4
    {
        question:"What has many keys but can’t open a single lock?",
        answer:[{id:1, letter:"P"},{id:2, letter:"I"},{id:3, letter:"A"},{id:4, letter:"N"},{id:5, letter:"O"}],
        letters:["L","C","T","I","E","N","G","A","P","F","O","M"]
    },
    //Riddle 5
    {
        question:"I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?",
        answer:[{id:1, letter:"B"},{id:2, letter:"R"},{id:3, letter:"E"},{id:4, letter:"A"},{id:5, letter:"T"},{id:6, letter:"H"}],
        letters:["F","H","Q","Y","R","B","A","K","M","E","T","U"]
    },
    //Riddle 6 
    {
      question:"What is always in front of you but can’t be seen?",
      answer:[{id:1, letter:"F"},{id:2, letter:"U"},{id:3, letter:"T"},{id:4, letter:"U"},{id:5, letter:"R"},{id:6, letter:"E"}],
      letters:["J","D","U","Y","T","R","A","G","I","E","T","F"]
    },
    //Riddle 7 
    {
        question:"If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?",
        answer:[{id:1, letter:"S"},{id:2, letter:"E"},{id:3, letter:"C"},{id:4, letter:"R"},{id:5, letter:"E"},{id:6, letter:"T"}],
        letters:["E","H","S","T","W","B","A","K","M","C","O","R"]
    },
    //Riddle 8 
    {
        question:" What gets bigger when more is taken away?",
        answer:[{id:1, letter:"H"},{id:2, letter:"O"},{id:3, letter:"L"},{id:4, letter:"E"}],
        letters:["P","O","Q","L","R","E","A","H","M","E","J","S"]
    },
    //Riddle 9 --modify it
    {
        question:"I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?",
        answer:[{id:1, letter:"Y"},{id:2, letter:"A"},{id:3, letter:"R"},{id:4, letter:"N"}],
        letters:["Z","S","U","N","R","L","A","W","Y","C","F","G"]
    },
    //Riddle 10 --modify it
    {
        question:" What has hands, but can’t clap?",
        answer:[{id:1, letter:"C"},{id:2, letter:"L"},{id:3, letter:"O"},{id:4, letter:"C"},{id:5, letter:"K"}],
        letters:["O","B","V","Y","L","S","A","K","N","C","A","P"]
    }
    
    
    
]

const questionsArr=Riddles.map(riddle=>(riddle.question))

const answersArr=Riddles.map(riddle=>(riddle.answer))
console.log(answersArr)

const lettersArr=Riddles.map(riddle=>(riddle.letters))


export default Riddles;
export {
    questionsArr,
    answersArr,
    lettersArr
}
