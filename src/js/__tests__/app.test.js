import destruct from '../app';

const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
};

const result = [
  {
    id: 8,
    name: 'Двойной выстрел',
    description: 'Двойной выстрел наносит двойной урон',
    icon: 'http://...'
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    description: 'Описание недоступно',
    icon: 'http://...'
  }
];

test('Test desruct obj', () => {
      const temp = destruct(obj);
      expect(temp).toEqual(result);
});