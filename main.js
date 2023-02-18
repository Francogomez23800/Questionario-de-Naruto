import { question } from './data/questions.js';
import { Quiz } from './classes/quiz.js';
import { UI } from './classes/UI.js'

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        console.log(quiz.score)
        ui.showScore(quiz.score)
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices,
            (currentChoice) => {
                quiz.guess(currentChoice)
                renderPage(quiz, ui)
            })
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }
}

function main() {
    const quiz = new Quiz(question)
    const ui = new UI()

    renderPage(quiz, ui)
}

main()