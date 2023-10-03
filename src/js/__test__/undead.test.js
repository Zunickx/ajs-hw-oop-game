import Undead from '../Undead';

// проверим тестом, что при создании объекта Undead задаются верные имя и ожидаемые значения

test('test class undead with valid value of name', () => {
  const undead = new Undead('undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});

// проверим, что при создании имени класса, имя класса соответствует параметру от 2 до 10 символов

test('test class undead with invalid value of name', () => {
  expect(() => {
    const undead = new Undead('Zickfriedead');
    return undead;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

// проверим класс на соответствие типу

test('test class undead with invalid value of type', () => {
  expect(() => {
    const undead = new Undead('undead', 'Pacman');
    return undead;
  }).toThrow(new Error('Not valid character type!'));
});