import Bowerman from '../Bowerman';

// проверим тестом, что при создании объекта Bowerman задаются верные имя и ожидаемые значения

test('test class Bowerman with valid value of name', () => {
  const bowerman = new Bowerman('bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(expected);
});

// проверим, что при создании имени класса, имя класса соответствует параметру от 2 до 10 символов

test('test class Bowerman with invalid value of name', () => {
  expect(() => {
    const bowerman = new Bowerman('Zickfriedead');
    return bowerman;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

// проверим класс на соответствие типу

test('test class Bowerman with invalid value of type', () => {
  expect(() => {
    const bowerman = new Bowerman('bowerman', 'Pacman');
    return bowerman;
  }).toThrow(new Error('Not valid character type!'));
});