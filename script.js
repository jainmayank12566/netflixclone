const faqQuestions = document.querySelectorAll('.queries-questions');
const faqAnswers=document.querySelectorAll('.queries-answers');
faqQuestions.forEach((question,index) => {
    question.addEventListener('click', () => {
        faqAnswers.forEach((answer)=>{
            answer.style.display='none';
        });
        faqAnswers[index].style.display='block';
    });
});