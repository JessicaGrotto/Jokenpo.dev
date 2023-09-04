
const playHuman = (humanChoice) => {  
    
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3) 

    return choices[randomNumber]     
}

const playTheGame = (human, machine) => {

    console.log("Humano: "+ human + " Máquina: "+ machine)

}