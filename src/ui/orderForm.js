import {flavorArray, kindDrink, typeDrink} from "../config/constants";

export default class OrderForm
{
    #parentForm;
    #drink;
    #kind;
    #flavor;

    constructor(selector)
    {
        this.#parentForm = document.querySelector(selector);
        this.#parentForm.innerHTML =
            `<div class="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="name@co.il" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Type of drink</label>
                <select name="drink" class="form-control" required></select>
            </div>
            <div class="form-group">
                <label>Kind of drink</label>
                <select name="kind" class="form-control" required></select>
            </div>
            <div class="form-check">
                <input type="radio" name="size" value="small" class="form-check-input">
                <label>small</label>
            </div>
            <div class="form-check">
                <input type="radio" name="size" value="medium" class="form-check-input" checked>
                <label>medium</label>
            </div>
            <div class="form-check">
                <input type="radio" name="size" value="large" class="form-check-input">
                <label>large</label>
            </div>
            <div class="form-group">
                <label>Flavor</label>
                <select name="flavor" class="form-control"></select>
            </div>
            <div class="form-group">
                <label>Strength</label>
                <input type="range" name="strength" value="0" min="0" max="100" step="10" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-primary">Reset</button>`

        this.#drink = document.querySelector('select[name="drink"]');
        this.#kind = document.querySelector('select[name="kind"]');
        this.#flavor = document.querySelector('select[name="flavor"]');
        this.#setDrink();
        this.#drink.onchange = () =>
        {
            this.#setKind();
            this.#setFlavor();
        }
    }

    #setDrink()
    {
        this.#drink.innerHTML = `<option value="" disabled selected>Select type of drink</option>
                                ${typeDrink.map(type => `<option value="${type}">${type}</option>`)}`
    }
    #setKind()
    {
        this.#kind.innerHTML = `<option value="" disabled selected>Select kind of drink</option>
                                ${kindDrink[this.#drink.value].map(type => `<option value="${type}">${type}</option>`)}`
    }
    #setFlavor()
    {
        this.#flavor.innerHTML = `<option value="" disabled selected>Select flavor</option>`
        if(this.#drink.value == 'coffee' || this.#drink.value == 'tea')
             this.#flavor.innerHTML += `${flavorArray.map(type => `<option value="${type}">${type}</option>`)}`
    }
 }