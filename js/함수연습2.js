window.onload = function(){
    function f(){
        let n = prompt("숫자를 입력하세요.");
        let y = "1";

        for(let z = 1; z <= n; z ++ ){
            y *= z
        }
        return y
    }
    document.write(f())
}