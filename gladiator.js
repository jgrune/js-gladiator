/*jshint esversion: 6 *//* jshint asi: true */

class Gladiator {
	//constructor method
	constructor(name, weapon){
    if (weapon == "Spear" || weapon == "Trident" || weapon == "Club"){
      this.name = name
  		this.weapon = weapon
    } else {
      throw 'error: you cant do that'
    }
	}

	//instance methods
	withdraw(amount){

	}
}

var jon = new Gladiator("jon", "Spear");
var sally = new Gladiator("sally", "Club")
