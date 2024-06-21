export default class Navigator
{
    #previousActiveIndex;
    #controls;//{{li->div},{li->div}}

    constructor(selectors, activeIndex)//selectors = ["new_order", "list_orders"]
    {
        this.#previousActiveIndex = -1;
        this.#controls = selectors.map(this.#createControl);
        this.#addHandlers();
        this.#showActiveIndex(activeIndex);
    }

    #createControl = selector =>
    {
        let control = {};
        control.$navItem = $(selector);
        control.$areaItem = $('#' + control.$navItem.attr('aria-controls'));
        return control;
    }

    #addHandlers = () =>
    {
        this.#controls.forEach((control, index) =>
        {
            control.$navItem.click(event =>
            {
                event.preventDefault();
                this.#showActiveIndex(index);
            })
        })
    }

    #showActiveIndex(index)
    {
        if(this.#previousActiveIndex === index)
            return;
        if(this.#previousActiveIndex > -1)
            this.#hideControl(this.#controls[this.#previousActiveIndex]);

        this.#showControl(this.#controls[index]);
        this.#previousActiveIndex = index;
    }

    #hideControl(control)
    {
        control.$navItem.removeClass('active');
        control.$areaItem.attr('hidden', true);
    }

    #showControl(control)
    {
        control.$navItem.addClass('active');
        control.$areaItem.attr('hidden', false);
    }
}