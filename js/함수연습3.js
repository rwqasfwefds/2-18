// window.onload = function(){
//     function f(){
//         let x = prompt("숫자를 입력하세요.");
//         let y = prompt("숫자를 입력하세요.");

//         for(let t = x; t <= y; t++){
//             document.write(t + " ")
//         }
//     }
//     f()
// }

window.onload = function(){
    function f(){
        let x = prompt("숫자를 입력하세요.");
        let y = prompt("숫자를 입력하세요.");
        let z = "";

        for(let i = x; i <= y; i++){
            z += i;
            
        }
        return z;
    }
    document.write(f())
}