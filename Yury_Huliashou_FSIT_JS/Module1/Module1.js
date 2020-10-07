alert('Module 1');
alert('Task 1');
let nums1 = [4, 2, 7, 11, 15];
const target1 = 9;
let nums2 = [26, 3, 2, 4, 7, 1];
const target2 = 6;
let nums3 = [3, 3, 4, 5, 9];
const target3 = 6;
sumTarg(nums1, target1);
sumTarg(nums2, target2);
sumTarg(nums3, target3);
function sumTarg (nums, target)
{
    let ind1, ind2;
    for (i = 0; i < nums.length; i++)
        for (j = i + 1; j < nums.length; j++)
            if (Math.round(nums[i] + nums[j]) == target)
                {ind1 = i; ind2 = j;}
    alert(ind1 + '   ' + ind2);
}
alert('Task 2');
let nums4 = [1, 3, 4, 2, 2];
let nums5 = [3, 1, 3, 4, 2, true];
let nums6 = [9, 4, 77, 5, 1, 12, 'qwerty', 66, 4];
repeat(nums4)
repeat(nums5)
repeat(nums6)
function repeat (nums)
{
    for (i = 0; i < nums.length; i++)
        for (j = i + 1; j < nums.length; j++)
            if (nums[i] === nums[j])
                alert (nums[i]);
}
alert('Task 3');
let nums7 = [7, 13, 5, 1, 99];
let nums8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums9 = [11, 45, 2, 5, 4, 4];
sum(nums7);
sum(nums8);
sum(nums9);
function sum (nums)
{
    let sums = 0;
    for (i = 0; i < nums.length; i++)
        sums += nums[i];
    alert(sums);
}