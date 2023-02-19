export class UI {
    constructor() { }

    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'
            button.addEventListener('click', () => callback(choices[i]))

            choicesContainer.append(button)
        }
    }
    showScore(score) {
        const quizEndHTML = `
        <h1>Score</h1>
        <h2 class = "score">${score}/7</h2>
        <a class="showAnswers" href="#answers">Respuestas</a>
        <ul id="answers">   
        <li class = "rightAnswer">  
        ¿En qué año se estrenó el anime de Naruto?
        <hr>
        <b>2002</b>
        </li>  
        <li class = "rightAnswer">
        ¿Con quién se fué a entrenar Naruto por 3 años?
        <hr>
        <b>Jiraiya</b>
        </li>  
    <li class = "rightAnswer">
        ¿Con qué personaje quedó manco Naruto?
        <hr>
        <b>Sasuke</b>
    </li> 
    <li class = "rightAnswer">
        ¿Cuántos mangas se han escrito de Naruto?
        <hr>
        <b>700</b>
    </li>
    <li class = "rightAnswer">
        ¿Cómo se llama el primer capitulo del anime?
        <hr>
        <b>Naruto Uzumaki</b>
    </li>
    <li class = "rightAnswer">
    ¿Cómo se llama el bijuu que tiene sellado Naruto?
    <hr>
        <b>Kurama</b>
    </li>
    <li class = "rightAnswer">
        ¿Cómo se llama el autor del manga?
        <hr>
        <b>Itachi Uchiha</b>
    </li></ul>
    <a id="restart" class="showAnswers" href="/">Reintentar</a>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML
        const scoreText = document.querySelector('.score')
        const h1 = document.querySelector('h1')
        const answers = document.getElementById('answers')
        const restart = document.getElementById('restart')
        const showAnswer = document.querySelector('.showAnswers')
        showAnswer.addEventListener('click', () => {
            answers.style.display = 'block'
            showAnswer.style.display = 'none'
            restart.style.display = 'block'
            h1.style.display = 'none'
            scoreText.style.display = 'none'
        })
    }

    showProgress(currentIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `${currentIndex} of ${total}`
    }
}