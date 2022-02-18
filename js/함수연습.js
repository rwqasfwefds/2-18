// window.onload = function(){
//     function f(){
//         let y = prompt("숫자를 입력하세요.");
//         let z = prompt("숫자를 입력하세요.");
        

//         if(y > z){
//             return y;
//         }
//         else{
//             return z;
//         }
//     }
//     document.write(f());
// }
window.onload = function(){
    function f(){
        let x = prompt("숫자를 입력하세요.");
        let y = prompt("숫자를 입력하세요.");
        let result = "";

        if(x > y){
            result = x;
        }
        else{
            result = y;
        }
        return result;
    }
    document.write(f());
}