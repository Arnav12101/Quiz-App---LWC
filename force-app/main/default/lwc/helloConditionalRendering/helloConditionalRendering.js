import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    handleClick(){
        this.isVisible = true;
    }
    //if:false is the opposite of if:true directive
}