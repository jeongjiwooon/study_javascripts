// if ()
// {
    
// }

// else if
// {
        
// }

// else
// {
    
// }

let first = 1;
let second = 4;

if (first < 10)
{
    console.log("Mano");
}

else if (first > second)
{
    console.log(`${first} > ${second}`)
}

else
{
    console.log(`second: ${second}`)
}

// == vs ===
let third = `4`;
first = 4;

// third == first
// true
// third === first
// false

// 삼항 연산자
// if (condition)
// {
    
// }

// else
// {
    
// }
// 변수 = (condition) ? : 거짓일때 ;

// let result = (third === first) ? `true !` : `false !`;

// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`Done`);

// for (let i = 0; i < animals.length; i = i + 1)
// {
//     console.log(`${i}: ${animals[i]}`)
// }

// // for (String animal : animals)
// for (let animal of animals)
// {
//     console.log(`${animal}`);
// }

const animals_obj = 
[
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
];

let outHtml = ``;
for (let animal_hashmap of animals_obj)
{
    console.log(`name: ${animal_hashmap.name}, species: ${animal_hashmap['species']}`);
    outHtml = `${outHtml}<div>name: ${animal_hashmap.name}, species: ${animal_hashmap['species']}</div>`;
}
console.log(outHtml);

// browser 자원 중에 docs
let loops_source = document.querySelector('#loops')

// <div id="loops">inner text</div>
// loops_source.innerHTML = outHtml