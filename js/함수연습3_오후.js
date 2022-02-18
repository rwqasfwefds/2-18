window.onload = function(){
    let a = prompt('숫자를 입력하세요.');
    let c = "";
    
    function f(){
        for(let b = 1; b <= a; b++){
            c += "*"
        }
        return c
    }
    document.write(f())
}
