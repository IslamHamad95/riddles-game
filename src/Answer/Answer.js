import React, { Component } from 'react'
import Riddles from '../RiddlesArray'
export default class Answer extends Component {
    render() {
        return (
            <div>
                {Riddles[0].answer.forEach( answer => (
                   <div id="letter">{answer} </div>
                    
        ))}
                
              
            </div>
        )
    }
}

