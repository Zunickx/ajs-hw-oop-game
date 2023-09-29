/* eslint-disable max-classes-per-file */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */

export default class Character {
    constructor (name, type) {
        if(name.length < 2 || name.length > 10) throw new Error ('Имя персонажа должно быть не менее 2 символов и не более 10 символов')
        else this.name = name;
    }

    class CharacterType {
        constructor(characterType, atack, defence) {
            this.characterType = characterType;
            this.atack = atack;
            this.defence = defence;
        }
    }

    const characterTypes = [];
    characterType.push(new CharacterType('Bowerman', 25, 25));
    characterType.push(new CharacterType('Swordsman', 40, 10));
    characterType.push(new CharacterType('Magician', 10, 40));
    characterType.push(new CharacterType('Undead', 25, 25));
    characterType.push(new CharacterType('Zombie', 40, 10));
    characterType.push(new CharacterType('Daemon', 10, 40));

    const characterType = characterTypes.find((el) => el.characterType === type);
    if(!characterType) throw new Error ('Неверный тип персонажа')
    else {
        this.type = type;
        this.atack = characterType.atack;
        this.defence = characterType.defence;
    }

    this.health = 100;
    this.level = 1;
}