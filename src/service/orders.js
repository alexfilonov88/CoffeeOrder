export default class Orders //import Orders from "orders.js"
{
    #data;

    constructor()
    {
        this.#data = {};
    }

    add = order =>
    {
        if(this.#data[order.email])
            return `Order with email ${order.email} is already exists`;
        this.#data[order.email] = order;
        return  '';
    }

    remove = email =>
    {
        if(!this.#data.email)
            return false;
        delete this.#data.email;
        return true;
    }

    get = email => this.#data.email;

    getAll = () => Object.values(this.#data);
}
