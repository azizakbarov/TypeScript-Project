import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
//interfaces
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice ('yoshi', 'web work', 250 );
// docTwo = new Payment ('mario', 'plumbing work', 350);
// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number; 
// }
// const me: isPerson = {
//     name:'Alex',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend (amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// }
//     const greetPerson = (person: isPerson) => {
//         console.log('Hello there', person.name)
//     }
//     greetPerson(me);
// const invOne = new Invoice ('mario', 'for the website', 250);
// const invTwo = new Invoice ('luigi', 'for the website', 300);
// let invoices: Invoice[] = []; 
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach( inv => {
//     console.log(inv.client, inv.amount, inv.format())
// }); 
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
