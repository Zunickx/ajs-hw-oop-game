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