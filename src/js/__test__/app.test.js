import Character from '../basic';
import * as app from '../app'; //импортируем модуль app

test.each([app.Bowerman, app.Swordsman, app.Magician, app.Undead, app.Zombie, app.Daemon]) ( // создаем массив с названиями классов, а с помощью метода each создаем тестовый сценарий для каждого класса
    ('Sould be instance of class Character'), 
    (CharacterClass) => {
        expect(CharacterClass.prototype).toBeInstanceOf(Character); // создаем экземпляр класса персонажа и проверяем, является ли он экземпляром базового класса Character с помощью метода InstanceOf
    },
);