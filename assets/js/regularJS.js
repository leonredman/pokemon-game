// This is the pokemon database - simulated data
var pokemonDB = [
    {
      name: 'charmander',
      type: 'fire',
      hp: 39,
      attack: 52,
      defense: 43,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
    },
    {
      name: 'bulbasaur',
      type: 'fire',
      hp: 45,
      attack: 49,
      defense: 49,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
    },
    {
      name: 'squirtle',
      type: 'water',
      hp: 44,
      attack: 48,
      defense: 65,
      level: 1,
      img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
    },
  ]
// javascript game state

var gameState = {
  userPokemon: '',
  rivalPokemon: ''

}
console.log(gameState)

// elements 
var pokemonsEl = document.querySelector('.select-screen')
.querySelectorAll('.character')
console.log(pokemonsEl)
var battleScreenEl = document.getElementById('battle-screen')
var attackBtnsEl = document.getElementById('battle-screen')
.querySelectorAll('.attack')
console.log(attackBtnsEl)


    //this is the initial loop
    var i = 0;

while (i < pokemonsEl.length) {
    // add function to all characters on screen select
  pokemonsEl[i].onclick = function() {
    // current selected pokemons name

    var pokemonName = this.dataset.pokemon
    //elements for images on battle screen 

    var player1Img = document.querySelector('.player1') 
    .getElementsByTagName('img')
    var player2Img = document.querySelector('.player2') 
    .getElementsByTagName('img')
    
    // we save the current pokemon

    gameState.userPokemon = pokemonName
    // cpu pics a pokemon

    cpuPick()
    //change screen to battle screen 

    battleScreenEl.classList.toggle('active')
    
    // select data from current user pokemon

    gameState.currentPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name == gameState.userPokemon
    })
    player1Img[0].src = gameState.currentPokemon[0].img
    
    // select data from current cpu pokemon
    gameState.currentRivalPokemon = pokemonDB.filter(function(pokemon){
      return pokemon.name == gameState.rivalPokemon
    })
    player2Img[0].src = gameState.currentRivalPokemon[0].img

    
    console.log(calculateInitialHealth(gameState.currentPokemon))

    // user choose attack


    // cpu health goes down

    //cpu attack


    //user health goes down


    // rock > Scissors

    // paper > rock

    // scissors > paper

    // depending on pokemon type and defense is how hard the attack is going to be
    // and how much health it will take up


    // then who ever gets to health <= 0 looses
  }
  i++
}

var a = 0
while (a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function() {
    var attackName = this.dataset.attack
    gameState.currentUserAttack = attackName
    
    play(attackName, cpuAttack())

  }
  a++
}

var cpuAttack = function() {
  var attacks = ['rock', 'paper', 'scissors']

  return attacks[randomNumber(0,3)]
}

var calculateInitialHealth = function(user){
  return ((0.20 * Math.sqrt(user.level)) * user.defense) * user.hp

}

var play = function(userAttack, cpuAttack){
  switch(userAttack) {
    case 'rock':
      if (cpuAttack == 'paper') {
        console.log('paper killed rock')
      }
      if(cpuAttack == 'scissors') {
        console.log('rock killed paper')
      }
      if(cpuAttack == 'rock') {
        console.log('its a draw')
      }

      console.log(userAttack)
      break;
    case 'paper':
      console.log(userAttack)
      break;
      case 'scissors':
        console.log(userAttack)
        break;
  }
}

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var cpuPick = function () {

 gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon
}





























// // pokemon
// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// var pokemons = [
//     {
//       name: 'charmander',
//       type: 'fire',
//       attack: 52,
//       defense: 39,
//       level: 1
//     },
//     {
//       name: 'charmander',
//       type: 'fire',
//       attack: 52,
//       defense: 39,
//       level: 1
//     },
    
//   ]
  
  
//   var attack = 20;
//   var level = 10;
//   var stack = 1.3;
//   var defense = 39;
  
//   // create a formula for attacks
//   console.log((attack * level ) * stack / 7)
  
  
  
//   // create a formula for health
//   //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
//   console.log(((0.20 * Math.sqrt(level)) * defense) * 15)
  
  
  
  
//   // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
//   // p1 vs p2
  
  
  
  
//   when one user loses all his health declare a winner  