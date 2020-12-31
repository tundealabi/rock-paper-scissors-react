import React, { Component } from 'react';
import initialState from '../startup/initState';
import GameOver from './GameOver.jsx';
import logic from '../helpers/logic';
import computerAns from '../helpers/computerAns';
import style from '../../public/css/battlefield.css';
import borderColor from '../helpers/border';
import rock from '../../public/assets/rock.png';
import scissors from '../../public/assets/scissors.png';
import paper from '../../public/assets/paper.png';
import separator from '../../public/assets/separator.jpg';
import computer from '../../public/assets/computer.jpg';


class BattleField extends Component {
    state = { ...initialState }
    handleClick = (e) => {
        const { name } = e.target;
        const computerChoice = computerAns();
        const result = logic(name,computerChoice);
        this.setState(prevState=>{
            return {
                round: prevState.round + 1,
                humanLife: result.winner === "human" ? prevState.humanLife : result.winner === "tie" ? prevState.humanLife : prevState.humanLife - 1,
                computerLife: result.winner === "computer" ? prevState.computerLife : result.winner === "tie" ? prevState.computerLife : prevState.computerLife - 1,
                computerAnswer: computerChoice === "rock" ? rock : computerChoice === "paper" ? paper : scissors,
                message: result.message,
                roundWinner: result.winner
            }
        })
    }
    handleReplay = () => this.setState({...initialState})
    render(){
        return (
            <div>
                {!this.state.computerLife || !this.state.humanLife ? 
                    <GameOver handleReplay={this.handleReplay} winner={this.state.roundWinner}/>
                    :
                    <div className={style.human}>
                    <div>
                        <img src={rock} alt="rock image" name="rock" onClick={this.handleClick}/>
                    </div>
                    <div>
                        <img src={scissors} alt="scissors image" name="scissors" onClick={this.handleClick}/>
                    </div>
                    <div>
                        <img src={paper} alt="paper image" name="paper" onClick={this.handleClick}/>
                    </div>
                </div>
            }
                <div className={style.separator}>
                       <img src={separator} alt="seperator image" />
                </div>
                <div className={style.computer} >
                    <div style={borderColor(this.state.roundWinner)} >
                        <p>Computer's wepaon</p>
                        <img src={this.state.computerAnswer} alt="computer image" />
                    </div>
                    <div style={borderColor(this.state.roundWinner)} >
                        <p>Round:{this.state.round}</p>
                        <p>Your Lives: {this.state.humanLife} | Computer's Lives: {this.state.computerLife}</p>
                        <p>{this.state.computerLife && this.state.humanLife ? this.state.message
                            :
                            !this.state.computerLife ? "Hehe, poor enemy has no life left.. He barely holds himself in one piece." 
                            : "Ouch.. No life left for you. Enjoy the mocking laughter of the enemy." 
                        }
                        </p>
                    </div>
                </div>      
            </div>
        )
    }
}

export default BattleField;