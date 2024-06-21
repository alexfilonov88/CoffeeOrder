export default class List
{
    #listElement;

    constructor(selector)
    {
        this.#listElement = document.querySelector(selector);
    }

    addItem = content =>
    {
        let element = document.createElement('li');
        element.textContent = content;
        this.#listElement.append(element);
    }
}
