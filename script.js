const setWords = ["hello how are you hope you doing well", "i am shubham prajapati this is speed testing game", "check you speed, what is your speed see it"];




const addBtn = document.getElementById('btn');
const addTxt = document.getElementById('write');
const type = document.getElementById('txt');
let startTime, endTime;

const gamePlay = () => {
    const random = Math.floor(Math.random()*setWords.length);
    type.innerText = setWords[random];
    let date = new Date();
    startTime = date.getTime();
    addBtn.innerText = "Done";
}



addBtn.addEventListener('click', function(){
    if(this.innerText == "Start"){
        addTxt.disabled = false;
        gamePlay();
    }
})