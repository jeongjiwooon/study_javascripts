function calculaterSumFirst(first, second)
{
    return first + second;
}

let third = calculaterSumFirst(4, 6);

let calculaterMinusSecond = (first, second) =>
{
    return first - second;
};

// calculaterSumSecond(2, 1)
// 1

// callback function
function calculaterSumFourth(funcName, param1, param2)
{
    let result = funcName(param1, param2);
    result = result + 10;
    return result;
}