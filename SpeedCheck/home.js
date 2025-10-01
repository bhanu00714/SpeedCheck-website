// Date:30/09/2025
// Day: Tuesday

//accuracy needed variables
let totalCharTyped;
let errors;
let time;//for wpm
//taking actual text and input from site
const startButton= document.querySelector('.start-button');
const put = document.querySelector('.put');
startButton.addEventListener('click',()=>{
    put.innerHTML=`
    <div class="write">
        <p class="actual-text">
            One stormy evening, Maya found a small glowing box outside her door. Curious, she opened it and discovered a folded note that simply read: “This will guide you when you feel lost.” Confused, she kept the box on her desk. Weeks later, when she felt overwhelmed with decisions, the box glowed again, casting soft light across her room. At that moment, she realized the box wasn’t magic—it was a reminder that sometimes, guidance comes not from answers, but from the courage to pause and listen to herself.
        </p>
        <textarea class="typed-text"></textarea>
    </div>
    <div class="finish-card">
        <button class="finish-button">Finish</button>
    </div>
    <div class="result">
        <div class="accuracy">
            <p>Accuracy</p>
            <p class="disp-acc"></p>
        </div>
        <div class="wpm">
            <p>WPM</p>
            <p class="disp-wpm"></p>
        </div>
    </div>
    `;
    const acutalText = document.querySelector('.actual-text').innerHTML;
const typedText = document.querySelector('.typed-text');
const finishButton = document.querySelector('.finish-button');
//adding enter addeventlistener to input bar
let startTime;
let endTime;
let flag = 1;
//time
typedText.addEventListener('keydown',(event)=>{
    if(event.key&&flag===1){
        startTime = new Date();
        flag = 0;
    }
})
//time
finishButton.addEventListener('click',()=>{
        endTime = new Date();
        flag = 1;
        time = Math.round((endTime-startTime)/1000);
        totalCharTyped = typedText.value.length;
        errors = errorCounter(typedText.value.trim(),acutalText.trim());
        document.querySelector('.disp-acc').innerHTML =accuracy(totalCharTyped,errors);
        document.querySelector('.disp-wpm').innerHTML = WPM(totalCharTyped,time);
})
})

//error counter
function errorCounter(typedTextValue,actualText){
    let errorCount = 0
    for(let i = 0;i<typedTextValue.length;i++){
        if(typedTextValue[i] !== actualText[i]){
            errorCount++;
        }
    }
    return errorCount;
}
//returns accuracy
function accuracy(totalCharTyped,errors){
    return ((totalCharTyped-errors)/totalCharTyped)*100;
}
//WPM
//totalCharTyped,time
function WPM(totalCharTyped,time){
    return ((totalCharTyped*60)/(5*time));

}
