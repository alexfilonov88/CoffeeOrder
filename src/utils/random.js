export default class Random
{
    getRandomNumber = (min, max) =>
    {
        if(min >= max)
            throw 'Max should be bigger than min';
        return min + Math.round(Math.random() * (max - min));
    }

    getRandomElement = array => array[this.getRandomNumber(0, array.length - 1)];
 }
