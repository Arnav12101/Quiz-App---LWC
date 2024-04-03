import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {};//for storing answers
    correctAnswer = 0;
    isSubmitted = false;
    myQuestions = [
        {
            id:'question 1',
            question: 'Which one of the following is not a template loop ?',
            answers:{
                a: 'For each',
                b: 'Iterator',
                c: 'Map loop'
            },
            correctAnswer : 'c'
        },
        {
            id:'question 2',
            question: 'Which of the file is invalid in LWC component folder',
            answers:{
                a: '.svg',
                b: '.apex',
                c: '.js'
            },
            correctAnswer : 'b'
        },
        {
            id:'question 3',
            question: 'Which of the following is not a directive',
            answers:{
                a: 'if:true',
                b: 'if:false',
                c: '@track'
            },
            correctAnswer : 'c'
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer? 'slds-text-color_success':'slds-text-color_error'}`
    }

    changeHandler(event)
    {  
        // console.log("name - ", event.target.name)
        // console.log("value - ", event.target.value)
        const {name, value} = event.target
        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswer = correct.length
        this.isSubmitted = true;
        console.log("this.correctAnswer", this.correctAnswer)
    }

    //reset form
    resetHandler()
    {
        this.selected = {}
        this.correctAnswer = 0;
        this.isSubmitted = false;
    }

}