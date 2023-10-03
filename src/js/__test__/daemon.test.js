import Daemon from '../daemon';

// проверим тестом, что при создании объекта Daemon задаются верные имя и ожидаемые значения

test('test class daemon with valid value of name', () => {
  const daemon = new Daemon('daemon');
  const expected = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});

// проверим, что при создании имени класса, имя класса соответствует параметру от 2 до 10 символов

test('test class daemon with invalid value of name', () => {
  expect(() => {
    const daemon = new Daemon('zick');
    return daemon;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

// проверим класс на соответствие типу

test('test class daemon with invalid value of type', () => {
  expect(() => {
    const daemon = new Daemon('daemon', 'Pacman');
    return daemon;
  }).toThrow(new Error('Not valid character type!'));
});