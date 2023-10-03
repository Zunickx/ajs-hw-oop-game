export default class Character {
    constructor (name, type, attack, defence, health = 100, level = 1) {
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

        if(name.length < 2 || name.length > 10) {
            throw new Error ('Имя персонажа должно быть не менее 2 символов и не более 10 символов')
        } else {
            this.name = name;
        }

        if(!types.includes(type)) {
            throw new Error ('Неизвестный тип персонажа')
        } else {
            this.type = type;
            this.health = health;
            this.level = level;
            this.attack = attack;
            this.defence = defence;
        }
    }    

    levelUp() {
        if (this.health === 0) throw new Error('Нельзя повысить левел мертвого персонажа');
        else {
          this.level += 1;
          this.health = 100;
          this.attack += this.attack * 0.2;
          this.defence += this.defence * 0.2;
        }
    }

    damage(points) {
        if (this.health !== 0) {
          this.health -= points * (1 - this.defence / 100);
          if (this.health < 0) this.health = 0;
        }
    }
}