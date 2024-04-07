import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        console.log('Child constructor called')
    }

    connectedCallback(){
        console.log('Child ConnectedCallback Called');
        throw new Error('Loading of child component failed');
    }

    renderedCallback(){
        console.log('Child renderedCallBack called');
    }

    disconnectedCallback(){
        alert('Child disconnectedCallback Called !!!!');
    }

    
}