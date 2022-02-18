// window.onload = function (){
//     let a = prompt("숫자를 입력하세요.");
//     let b = prompt("숫자를 입력하세요.");
//     let c = "";
//     function f(){
//         if(a > b){
//             c = "a가 큼"
//         }
//         else if(a == b){
//             c = "a와 b가 같음"
//         }
//         else{
//             c = 'b가 큼'
//         }
//         return c
//     }
//     document.write(f())
// }
window.onload = function (){
    let a = prompt('숫자를 입력하세요.');
    let b = prompt('숫자를 입력하세요.');

    function f(){
        if(a > b){
            return 'a가 큼'
        }
        else if(a == b){
            return 'a와 b가 같음'
        }
        else{
            return 'b가 큼'
        }
    }
    document.write(f())
}
