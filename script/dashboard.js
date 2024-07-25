
        document.getElementById('create-post-btn').addEventListener('click', function() {
            document.getElementById('create-post-section').style.display = 'block';
        });

        document.getElementById('add-btn').addEventListener('click', function() {
            const title = document.getElementById('post-title').value;
            const img = document.getElementById('post-img').value;
            const tag = document.getElementById('post-tag').value;
            const description = document.getElementById('post-description').value;

            if (title && img && tag && description) {
                alert('Post details added: ' + '\nTitle: ' + title + '\nImage: ' + img + '\nTag: ' + tag + '\nDescription: ' + description);
            } else {
                alert('Please fill in all fields.');
            }
        });

        document.getElementById('submit-post-btn').addEventListener('click', function() {
            const title = document.getElementById('post-title').value;
            const img = document.getElementById('post-img').value;
            const tag = document.getElementById('post-tag').value;
            const description = document.getElementById('post-description').value;

            if (title && img && tag && description) {
                alert('Post created successfully!');
                // Here, you can add your code to handle the post creation logic, such as sending data to the server.
                document.getElementById('create-post-section').reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    