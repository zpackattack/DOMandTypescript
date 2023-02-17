//Question 14
function LongestCollatzSequence(n)
{
    let max = 0;
    let maxIndex;
      
    for(let i=1; i<n; i++) {
      var seq = collatzSequence(i);
      if(seq > max) {
        max = seq;
        maxIndex = i;
      }
    }
    return maxIndex;
    
}

function collatzSequence(n)
{
    let res = 1;

    while(n > 1)
    {
        n = collatz(n);
        res++;
    }

    return res;
}

function collatz(n)
{
    if(n % 2 == 0)
        return (n/2);

    else
        return ((3*n)+1);
}


console.log("Longest Collatz Sequence: " + LongestCollatzSequence(1000000));



//Question 20
function digitSum(x) 
{
    let str = factorial(x).toString();
    let sum = 0;
    for (let char of str) {
        sum += +char;
    }
    return sum;
}

function factorial(x)
{
    let temp = 1n;
    while (x > 1n) 
    {
        temp = temp * --x;
    }
    return temp;
}

console.log("Factorial Digit Sum: " + digitSum(100n));
