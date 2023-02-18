export class Question {
    constructor(text, choices, answer) {
        this.text = text
        this.choices = choices
        this.answer = answer
    }

    correctAnswer(choice) {
        if (choice === this.answer) {
            return true
        } else {
            return false
        }
    }
}



