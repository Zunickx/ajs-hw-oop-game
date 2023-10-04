import Zombie from '../Zombie';

// проверим тестом, что при создании объекта Zombie задаются верные имя и ожидаемые значения

test('test class zombie with valid value of name', () => {
  const zombie = new Zombie('zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

// проверим, что при создании имени класса, имя класса соответствует параметру от 2 до 10 символов

test('test class zombie with invalid value of name', () => {
  expect(() => {
    const zombie = new Zombie('Zickfriedead');
    return zombie;
  }).toThrow();
});

// проверим класс на соответствие типу

test('test class zombie with invalid value of type', () => {
  expect(() => {
    const zombie = new Zombie('zombie', 'Pacman');
    return zombie;
  }).toThrow();
});