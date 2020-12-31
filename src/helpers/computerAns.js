const computerAns = () => {
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length);

    return weapons[randomIndex];
}

export default computerAns;