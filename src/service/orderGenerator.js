// {type, email, size, flavor, strength}

import {coffeeType, ed, flavorArray, sizeArray} from "../config/constants";

class OrderGenerator
{
    #random;

    constructor(random)
    {
        this.#random = random;
    }

    getRandomOrder = () =>
    ({
        email: `name${this.#random.getRandomNumber(1, 1000)}@${this.#random.getRandomElement(ed)}`,
            coffee: this.#random.getRandomElement(coffeeType),
            size: this.#random.getRandomElement(sizeArray),
            flavor: this.#random.getRandomElement(flavorArray),
            strength: this.#random.getRandomNumber(0, 100)
    })
}
export default OrderGenerator;
