import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    ischildVisible = false;
    constructor(){
        super();
        console.log('Parent constructor called')
    }

    connectedCallback(){
        console.log('Parent ConnectedCallback Called');
        
    }

    renderedCallback(){
        console.log('Parent renderedCallBack called');
    }
    
    handleClick(){
        this.ischildVisible = !this.ischildVisible
    }

    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack)
    }
    
}

