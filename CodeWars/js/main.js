// Reversed String
// function solution(str){
//     const reverseStr = str.split('').reverse('').join('');
//     return reverseStr;
//   }

// Remove First and Last Character
// const removeChar = str => {
//   let newStr = ''
//   for(let i = 0; i < str.length; i++){
//       if(i !== 0 && i !== str.length -1) {
//           newStr += str[i]
//       }
//   }
//   return newStr
// 

// Convert boolean values to strings 'Yes' or 'No'
function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}