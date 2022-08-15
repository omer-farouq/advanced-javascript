// const nums = [1, 2,-5, 3, 4, 5, -5, 6, 7, -9, 8, 9];
// for(let i = 0; i < nums.length; i++){
    
//     if(nums[i] > 4){
//         break;
//     }
//     // console.log(nums[i]);
// }

const nums = [1, 2,-5, 3, 4, 5, -5, 6, 7, -9, 8, 9];
for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    if(nums[i] < 0){
        continue;
    }
    console.log(i);
}