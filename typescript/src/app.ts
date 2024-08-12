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
    let doc: HasFormatter
    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        console.log(doc, doc.format())
    } else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber)
        console.log(doc, doc.format())
    }
    list.render(doc, type.value, 'end')
})