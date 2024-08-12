import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";




const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLFormElement;
const details = document.querySelector("#details") as HTMLFormElement;
const amount = document.querySelector("#amount") as HTMLFormElement;

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter
    if(type.value === 'invoice') {
        doc = new Invoice(...values)
        console.log(doc, doc.format())
    } else {
        doc = new Payments(...values)
        console.log(doc, doc.format())
    }
    list.render(doc, type.value, 'end')
})