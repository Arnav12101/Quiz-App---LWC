import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    clickHandler(){
        this.showModal = true;
    }

    closeHandler(event){
        this.msg = event.detail
        this.showModal = false;
    }
}