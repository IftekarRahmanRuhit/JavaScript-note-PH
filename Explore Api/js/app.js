
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}