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
    }
    
]

const questionsArr=Riddles.map(riddle=>(riddle.question))

const answersArr=Riddles.map(riddle=>(riddle.answer))


const lettersArr=Riddles.map(riddle=>(riddle.letters))


export default Riddles;
export {
    questionsArr,
    answersArr,
    lettersArr
}
