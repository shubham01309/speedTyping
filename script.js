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

const gameEnd = () =>{
    let date = new Date();
    endTime = date.getTime();
    const totalTime = ((endTime - startTime)/1000);
    
    let fast = "your time "+" " +totalTime + " seconds ";

    let totalStr = addTxt.value;
    let wordcount = wordCounter(totalStr);
    fast += compareText(type.innerText, totalStr);
    type.innerText = fast;
}
const compareText = (str1, str2) => {
    let a1 = str1.split(" ");
    let a2 = str2.split(" ");
    let count = 0;

    a1.forEach(function(item, index){
        if(item == a2[index]){
            count++
        }
        
    });

    let errorCount = ( a1.length - count );
    return (count + " correct word, " +" error words are " +errorCount);

} 

const wordCounter = (str) => {
    let words = str.split(" ").length;
    console.log(words);
    return words;
}

addBtn.addEventListener('click', function(){
    if(this.innerText == "Start"){
        addTxt.disabled = false;
        gamePlay();
    }else if(this.innerText == "Done"){
        addTxt.disabled = true;
        addBtn.innerText = "Start";
        gameEnd();
    }
})