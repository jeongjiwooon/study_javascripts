// string - String
// 숫자 - Number
// ArrayList = Array []
// HashMap = Object {}

let animals = ["dog", "cat", "bird", "fish", "lizard"];

console.log(`Done`);

for (let i = 0; i < animals.length; i = i + 1)
{
    console.log(`${i}: ${animals[i]}`)
}

// for (String animal : animals)
for (let animal of animals)
{
    console.log(`${animal}`);
}