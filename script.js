document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://localhost:8000/users'; // Reemplaza esto con la URL correcta de tu API

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        
        .then(data => {
            const userList = document.getElementById('user-list');
            data.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `ID: ${user.id}, Name: ${user.name}`;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
