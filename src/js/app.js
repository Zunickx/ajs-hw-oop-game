/* eslint-disable no-unused-vars */ /* - отключение правила ESLint, которое запрещает объявление неиспользуемых переменных*/ 
/* eslint-disable no-console */ /*отключение правила ESLint, которое запрещает использование консольных команд */
/* eslint-disable max-classes-per-file */ /*отключение правила ESLint, которое ограничивает количество классов в одном файле */

impot Character from './basic';

export class Bowerman extends Character {
}

export class Swordsman extends Character {
}

export class Magician extends Character {
}

export class Daemon extends Character {
}

export class Undead extends Character {
}

export class Zombie extends Character {
}

const bowerman = new Bowerman('Bow Man', 'Bowerman');
const swordsman = new Swordsman('Swords Man', 'Swordsman');
const magician = new Magician('MagiciaN', 'Magician');
const daemon = new Daemon('DaemoN', 'Daemon');
const undead = new Undead('UndeaD', 'Undead');
const zombie = new Zombie('ZombiE', 'Zombie');

console.log(Character.prototype);
console.log(Character.prototype.name);