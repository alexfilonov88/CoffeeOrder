import Orders from "./service/orders";
import FormHandler from "./utils/formHandler";
import OrderForm from "./ui/orderForm";
import Navigator from "./ui/navigator";
import Table from "./ui/table";

const orders = new Orders();
// const list = new List('#orders');
const myTable = new Table(['drink', 'kind', 'flavor', 'size', 'strength'], '#orders')
const formHandler = new FormHandler('form');
new OrderForm('form');
new Navigator(['#li_new_order', '#li_list_orders'], 0);

formHandler.addHandler(order =>
{
    let error = orders.add(order);
    if(!error)
        myTable.addRow(order);
    return error;
})
