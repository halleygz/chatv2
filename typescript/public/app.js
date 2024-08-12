import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/payments.js";
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
        console.log(doc, doc.format());
    }
    else {
        doc = new Payments(...values);
        console.log(doc, doc.format());
    }
    list.render(doc, type.value, 'end');
});
