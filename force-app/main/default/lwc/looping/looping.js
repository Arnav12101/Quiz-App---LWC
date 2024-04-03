import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Suzuki", "BWM", "Hyundai", "Mercedes"];
    


    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Pichai"
        },
        {
            id: 2,
            company: "Apple",
            name: "Cook"
        },
        {
            id: 3,
            company: "Facebook",
            name: "Mark"
        },
        {
            id: 4,
            company: "Amazon",
            name: "Bezos"
        }
    ]
}