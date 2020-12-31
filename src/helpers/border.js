const border = (roundWinner) => {
    switch(roundWinner){
        case "human":
            return {"borderColor":"#62b49c"};
        case "computer":
            return {"borderColor":"#b96b78"};
        case "tie":
            return {"borderColor":"#8070ac"};
    }
}

export default border;