import Swordsman from '../swordsman';

// проверим тестом, что при создании объекта Swordsman задаются верные имя и ожидаемые значения

test('test class Bowerman with valid value of name', () => {
  const swordsman = new Swordsman('swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});

// проверим, что при создании имени класса, имя класса соответствует параметру от 2 до 10 символов

test('test class Swordsman with invalid value of name', () => {
  expect(() => {
    const swordsman = new Swordsman('zick');
    return swordsman;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

// проверим класс на соответствие типу

test('test class Swordsman with invalid value of type', () => {
  expect(() => {
    const swordsman = new Swordsman('swordsman', 'Pacman');
    return swordsman;
  }).toThrow(new Error('Not valid character type!'));
});