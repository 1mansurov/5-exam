// 


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('register-form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            name: name,
            email: email,
            password: password
        };

        try {
            const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const result = await response.json();
                alert('Registration successful!');
                // Optionally, redirect to login page or another page
                // window.location.href = './login.html';
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});