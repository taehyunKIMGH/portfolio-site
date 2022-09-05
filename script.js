(function(){
const spanEl = document.querySelector("main h2 span"); //span 요소 노드 가져오기

const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer']; //화면에 표시할 문장 배열

let index = 0; //배열의 인덱스 초깃값

let currentTxt = txtArr[index].split(" "); //화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기

function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
        currentTxt = spanEl.textContent.split(" ");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join(" ");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt  = txtArr[index].split(" ");
        writeTxt();
    }
}
writeTxt();
})();