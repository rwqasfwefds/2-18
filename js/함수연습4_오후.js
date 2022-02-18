window.onload = function(){
    let n = prompt('숫자를 입력하세요.');
    let x = "";

    function f(){
        for(let y = 1; y <= n; y++){
            x += "*"
            document.write(x + "<br>") 
        }
    }
    f();
}