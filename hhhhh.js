const registerUser = async () => {
    const userData = {
        username: document.getElementById('regUsername').value,
        password: document.getElementById('regPassword').value,
        email: document.getElementById('regEmail').value
    };

    try {
        const response = await fetch('https://blog-post-production-b61c.up.railway.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        console.log('User registered successfully:', data);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

const loginUser = async () => {
    const credentials = {
        username: document.getElementById('loginUsername').value,
        password: document.getElementById('loginPassword').value
    };

    try {
        const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data = await response.json();
        console.log('User logged in successfully:', data);
    } catch (error) {
        console.error('Error logging in user:', error);
    }
};

const getAllBlogs = async () => {
    try {
        const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        document.getElementById('blogsList').innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};

const getBlogById = async () => {
    const id = document.getElementById('blogId').value;

    try {
        const response = await fetch(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        document.getElementById('blogDetails').innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
};

const createBlog = async () => {
    const blogData = {
        title: document.getElementById('blogTitle').value,
        content: document.getElementById('blogContent').value
    };

    try {
        const response = await fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Replace with actual token after login
            },
            body: JSON.stringify(blogData)
        });

        const data = await response.json();
        console.log('Blog created successfully:', data);
    } catch (error) {
        console.error('Error creating blog:', error);
    }
};