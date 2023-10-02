// import Character from './basic';

// export class Bowerman extends Character {
// }

// export class Swordsman extends Character {
// }

// export class Magician extends Character {
// }

// export class Daemon extends Character {
// }

// export class Undead extends Character {
// }

// export class Zombie extends Character {
// }

// const bowerman = new Bowerman('Bow Man', 'Bowerman');
// const swordsman = new Swordsman('Swords Man', 'Swordsman');
// const magician = new Magician('MagiciaN', 'Magician');
// const daemon = new Daemon('DaemoN', 'Daemon');
// const undead = new Undead('UndeaD', 'Undead');
// const zombie = new Zombie('ZombiE', 'Zombie');

// console.log(Character.prototype);
// console.log(Character.prototype.name);

import Bowerman from "../class/Bowerman";
import Daemon from "../class/Daemon";
import Magician from "../class/Magician";
import Swordsman from "../class/Swordsman";
import Undead from "../class/Undead";
import Zombie from "../class/Zombie";

class Game {
    constructor() {
        this.activeCharacters = [];
        this.activeCharacters.push(
            new Bowerman('bowerman'),
            new Daemon('daemon'),
            new Magician('magician'),
            new Swordsman('swordsman'),
            new Undead('undead'),
            new Zombie('zombie'),
        )
    }
}

const game = new Game();

game.activeCharacters.forEach((character) => {
    character.levelUp();
    character.damage(10);
    console.log(character);
})