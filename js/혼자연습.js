window.onload = function(){
    function f(){
        let n = prompt("숫자를 입력하세요.");
        let y = 1;

        for(let x = 1; x <= n; x++){
            for(let x = 1; x <= n; x++){
                y = x*2
            }
        }
    
        return (y);
    }
    document.write(f())
}