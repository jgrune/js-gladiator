/*jshint esversion: 6 *//* jshint asi: true */

class Arena {
	//constructor method
	constructor(name){
		this.name = name.toUpperCase()
    this.gladiators = []
	}

  addGladiator(gladName){
    if (this.gladiators.length < 2){
      this.gladiators.push(gladName);
    } else {
      return 'Error: You can only have two gladiators in the arena at a time'
    }
  }

  fight(){
    if(this.gladiators[0].name === "Maximus"){
      console.log('Autowin for Maximus');
      this.gladiators.pop();
    } else if (this.gladiators[1].name === "Maximus"){
      console.log('Autowin for Maximus');
      this.gladiators.shift();
    } else {


    let weapon1 = this.gladiators[0].weapon;
    let weapon2 = this.gladiators[1].weapon;
    let weaponArray = ["Spear", "Club", "Trident"]

    if ((weaponArray.indexOf(weapon1)) === weaponArray.indexOf(weapon2)){
      console.log('both gladiators are dead')
      this.gladiators = []
    } else if ((weaponArray.indexOf(weapon1) + 1) % 3 === weaponArray.indexOf(weapon2)){
      console.log(this.gladiators[1].name + ' is dead')
      this.gladiators.pop()
    } else if ((weaponArray.indexOf(weapon1) + 2) % 3 === weaponArray.indexOf(weapon2)){
      console.log(this.gladiators[0].name + ' is dead')
      this.gladiators.shift()
    }
  }
  }

  killName(name){
    if (this.gladiators[0].name === name){
      console.log('you killed' + name)
      this.gladiators.shift();
    } else if (this.gladiators[1].name === name){
      console.log('you killed' + name)
      this.gladiators.pop();
    }
  }
}
var thunderdome = new Arena ('thunderdome')
