const list_obj = 
[
    { year: "2020", car_name: "소나타", car_infor_id: "CI001", company_id: "C001"},
    { year: "2021", car_name: "코나", car_infor_id: "CI002", company_id: "C002"},
    { year: "2019", car_name: "SM6", car_infor_id: "CI003", company_id: "C003"},
    { year: "2022", car_name: "3 시리즈", car_infor_id: "CI004", company_id: "C004"},
    { year: "2020", car_name: "캠리", car_infor_id: "CI005", company_id: "C005"},
];

let outHtml = ``;

function tablelist(result)
{
    for (let hashmap of list_obj)
    {
        outHtml = `${outHtml}<tr><td>${hashmap.year}</td><td>${hashmap.car_name}</td><td>${hashmap.car_infor_id}</td><td>${hashmap.company_id}</td></tr>`;
    }
    let list_source = document.querySelector('#list');
    list_source.innerHTML = outHtml;
    return result;
}

// tablelist();

// add keydown Event

let keydownObject = document.querySelector("#keydownEnter");

keydownObject.addEventListener('keydown', (event) => 
{
    if (event.code == 'Enter')
    {
        console.log(`key down: ${event.code}`);
        tablelist();
    }
});