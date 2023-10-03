import Magician from '../Magician';

// проверим тестом, что при создании объекта Magician задаются верные имя и ожидаемые значения

test('test class Bowerman with valid value of name', () => {
  const magician = new Magician('magician');
  const expected = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});

// проверим, что при создании имени класса, имя класса соответствует параметру от 2 до 10 символов

test('test class magician with invalid value of name', () => {
  expect(() => {
    const magician = new Magician('Zickfriedead');
    return magician;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

// проверим класс на соответствие типу

test('test class magician with invalid value of type', () => {
  expect(() => {
    const magician = new Magician('magician', 'Pacman');
    return magician;
  }).toThrow(new Error('Not valid character type!'));
});