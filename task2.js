const dog = {
  name: 'Сильвия',
  type: 'Собака',
  makesound() {
    return 'Гав-гав';
  },
};
const bird = {
  name: 'Петенька',
  type: 'Воробей',
  makesound() {
    return 'Чик-чирик';
  },
};
function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makesound()}`);

  return {
    ...this,
    isDomestic: isDomestic,
  };
}
//вызываем первый объект
const makeDomesticWithBind = makeDomestic.bind(dog);
const domesticDog = makeDomesticWithBind(true);
console.log(domesticDog);
//вызываем второй объект
const domesticBirdCall = makeDomestic.call(bird, false);
console.log(domesticBirdCall);
