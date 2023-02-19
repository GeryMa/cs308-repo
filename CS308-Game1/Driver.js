const Gear = require('./Gear.js');
const Enemy = require('./Enemy.js');
const Player = require('./Player.js');
const Room = require('./Room.js');
const Traps = require('./Traps.js')
class Driver{
    player_1 = new Player(prompt("Enter your name before we begin"));
    console.log("Welcome to the world");
    console.log("We are a clan of adventurers\n and i want you to go to the shop and buy some gear");
    console.log("1500 gold has been added to your inventory");
    player_1.addGold(1500);

}