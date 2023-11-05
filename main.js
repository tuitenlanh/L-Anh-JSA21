const add = () => {
    let name = document.querySelector('.name').value;
    let age = document.querySelector('.age').value;
    let phone = document.querySelector('.phone').value;

const data = {
    name:name,
    age:age,
    phone:phone,
}

fetch('http://localhost:3000/comments',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})
alert("thanh cong")
}