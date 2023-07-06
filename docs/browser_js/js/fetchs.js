// 정부 데이터 포털: 대구 의료기기 판매
function fetchDatagokr()
{
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=1mwBjpqCO6bXF419htdzV8gUbaPE0z5s739L2aXrMPqsAxCScaCWRM6LuDNiVNREzenkFyglf9FQND2Rm1z7Fg%3D%3D&currentPage=1&perPage=10&SN=1'
    let request = fetch(url)
        .then((result) => 
        {
            result.json();
        })
        .then((data) =>
        {
            console.log(data);
        })
        .catch((errorMeg) =>
        {
            console.log(errorMeg);
        });
};

// 자동차 정보 상세
function fetchCarInforDetail()
{
    let url = 'http://192.168.0.40:8080/selectDetail/CI002'
    let request = fetch(url)
        .then((result) => 
        {
            return result.json();
        })
        .then((data) =>
        {
            console.log(data);
        })
        .catch((errorMeg) =>
        {
            console.log(errorMeg);
        });
};

// 자동차 정보 수정
function fetchCarInforUpdate()
{
    // http://192.168.0.40:8080/update
    // body -
    // {
    //     "car_name": "코나",
    //     "car_infor_id": "CAR-02"
    // }
    // headers
    // Content-Type: application/json
let url = 'http://192.168.0.40:8080/update'
let option =
{
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
            "car_name": "요주랩",
            "car_infor_id": "CI002"
    })
}
}
