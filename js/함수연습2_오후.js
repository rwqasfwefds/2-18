// window.onload = function(){
//     let a = prompt('숫자를 입력하세요.');
//     let b = "";

//     function f(){
//         if(a == 1){
//             b = '도'
//         }
//         else if(a == 2){
//             b = '개'
//         }
//         else if(a == 3){
//             b = '걸'
//         }
//         else if(a == 4){
//             b = '윷'
//         }
//         else{
//             b = '모'
//         }
//         return b
//     }
//     document.write(f())
// }
window.onload = function(){
    let a = prompt('숫자를 입력하세요.');
    
    function f(){
        if(a == 1){
            return '도'
        }
        else if(a == 2){
            return '개'
        }
        else if(a == 3){
            return '걸'
        }
        else if(a == 4){
            return '윷'
        }
        else{
            return '모'
        }
    }
    document.write(f())
}