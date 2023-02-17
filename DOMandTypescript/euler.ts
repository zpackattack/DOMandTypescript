//Question 1
function isMultiple(n:number):boolean
{
    return (n % 3==0 || n %5 ==0);
}

function solution1(n:number):number
{
    let sum:number = 0;
    let i:number = 3;

    while (i<n)
    {
        if(isMultiple(i))
        {
            sum+=i;
        }
        i++;
    }
    return sum;
}

console.log("Problem 1: " + solution1(1000));

//Question 2

/*const fib = (i: number): number => {
    if (i < 1) return 0;
    if (i < 2) return 1;
    return fib(i - 2) + fib(i - 1);
};*/

function isEven(n:number):boolean
{
    return (n%2 == 0)
}


function solution2(n: number):number
{
    let res:number = 0;

    let a:number = 0;
    let b:number = 1;
    while(b < 4000000) {
        const c = a + b;
        a = b;
        if(isEven(a))
        {
            res+=a;
        }
        b = c;
    }

    return res;
}

console.log("Problem 2: " + solution2(2));

//Question 3

function isPrime(num:number):boolean
{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function solution3(n:number):number
{
    let res:number[] = []
    for(let i=2; i*i<n; i++)
    {
        if(n%i==0 && isPrime(i))
        {
            res.push(i);
        }
    }
    return res[res.length-1];
}

console.log("Problem 3: " + solution3(600851475143));