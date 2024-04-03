import {track, LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    //local property
    /*name;
    age = 30;
    fullname = 'salesforce india';
    showData = true;

    details = {
        name: 'dummy',
        place: 'melbourne'
    };

    userlist = ['A','B','C'];*/

    //DATA BINDING - data binding is the synchronization between the controller(js) and the template (html)



    

    //METHODS
    
    // getName(){
    //     //perform my logic

    // }

    fullname = 'Zero to hero';
    title = 'aura';

    changeHandler(event){
        this.title = event.target.value;
    }
    

    @track address = {
        city: 'Melbourne',
        postcode: 3008,
        country : 'australia'
    };
    
    //@track userList  = ["a","b","c"];


    trackHandler(event){
        this.address.city = event.target.value;
        //this.userList[0] = event.target.value;
    }


    //Getter example
    users = ['john', 'smith','nik'];
    userFirst = this.users[0];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0];
    }

    get getMultiply(){
        return this.num1*this.num2;
    }
}