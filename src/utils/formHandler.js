export default class FormHandler
{
    constructor(selector)
    {
        this.$formElement = $(selector);
    }

    addHandler = fn => this.$formElement.on('submit', event =>
    {
        event.preventDefault();
        let res = {};//{kind:latte}
        this.$formElement.serializeArray().forEach(obj => res[obj.name] = obj.value);
        let fnRes = fn(res);
        if(fnRes)
        {
            alert(fnRes);
            return;
        }
        event.target.reset();
    })
}
//[{name:kind, value:latte}, {}]

