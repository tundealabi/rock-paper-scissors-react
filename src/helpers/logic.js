
const drawMsg = weapon => `Hmm.. Two ${weapon}s means a draw, so no lives were lost. Let's try again.`;

const humanWin = (humanWeapon,computerWeapon) => `Impressive attack! The enemy lost one life, because the great power of your ${humanWeapon} crushed his ${computerWeapon}!`;

const computerWin = (humanWeapon,computerWeapon) => `Unfortunate defeat.. You lost one life, because of your ${humanWeapon}'s lack of power against the enemy's ${computerWeapon}!`;

const logic = (humanAns,computerAns) => {
    if(humanAns === "rock" && computerAns === "scissors"){
        return {
            winner: "human",
            message: humanWin(humanAns,computerAns)
        }
    }
    if(humanAns === "scissors" && computerAns === "rock"){
        return {
            winner: "computer",
            message: computerWin(humanAns,computerAns)
        }
    }
    if(humanAns === "paper" && computerAns === "scissors"){
        return {
            winner: "computer",
            message: computerWin(humanAns,computerAns)
        }
    }
    if(humanAns === "scissors" && computerAns === "paper"){
        return {
            winner: "human",
            message: humanWin(humanAns,computerAns)
        }
    }
    if(humanAns === "rock" && computerAns === "paper"){
        return {
            winner: "computer",
            message: computerWin(humanAns,computerAns)
        }
    }
    if(humanAns === "paper" && computerAns === "rock"){
        return {
            winner: "human",
            message: humanWin(humanAns,computerAns)
        }
    }
    return {
        winner: "tie",
        message: drawMsg(humanAns)
    }
    
}

export default logic;