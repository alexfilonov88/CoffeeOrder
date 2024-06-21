export default class Table
{
    #headers;
    #tbody;

    constructor(headers, selector)//[type, kind]
    {
        this.#headers = headers;
        let $table = $(selector);
        let $thead = $('<thead>');
        this.#fillThead($thead);
        $table.append($thead);
        this.#tbody = $('<tbody>');
        $table.append(this.#tbody);
    }

    #fillThead($thead)
    {
        let $tr = $('<tr>');
        this.#headers.map(header => $('<th>', {text: header})).forEach(th => $tr.append(th));
        $thead.append($tr);
    }

    addRow = data => this.#tbody.append(this.#createRow(data));

    #createRow = data =>
    {
        let $row = $('<tr>');
        this.#headers.map(header => $('<td>', {text: data[header] ? data[header] : '---'}))
            .forEach(td => $row.append(td));
        return $row;
    }
}