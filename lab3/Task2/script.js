// Create a new XMLHttpRequest to fetch all posts
let xhr = new XMLHttpRequest();

// Open a GET request to the fake API
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// Send the request
xhr.send();

// Define the event handler for changes in request state
xhr.onreadystatechange = function () {
    // Check if the request is complete and successful
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Parse the JSON response
        let res = JSON.parse(xhr.response);
        
        // Get the table body element where data will be displayed
        let tableBody = document.getElementById("res");
        tableBody.innerHTML = ""; // Clear any existing content

        // Loop through the array of posts
        res.forEach(post => {
        // Create a row for each post 
        let row = `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        </tr>`;
        // Append the row to the table body
        tableBody.innerHTML += row;
        });
    }
    };

    // Function to fetch data for a specific post by its ID
    function GetDataBYID() {

    // Get the ID input from the user
    let inp = document.getElementById("databyid").value;

    // Check if the input is empty or invalid
    if (!inp) {
        alert("Please enter a valid ID."); 
        return;
    }

    // Create a new XMLHttpRequest for fetching data by ID
    let xhr = new XMLHttpRequest();

    // Open a GET request to fetch the specific post by ID
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp);

    // Send the request
    xhr.send();

    // Define the event handler for changes in request state
    xhr.onreadystatechange = function () {
        // Check if the request is complete
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                let res = JSON.parse(xhr.response);

                // Display the post details 
                document.getElementById("id").innerText = res.id;
                document.getElementById("title").innerText = res.title;
                document.getElementById("body").innerText = res.body;
            } else {
                // Display "Not Found" if the post doesn't exist
                document.getElementById("id").innerText = "Not Found";
                document.getElementById("title").innerText = "Not Found";
                document.getElementById("body").innerText = "Not Found";
            }
        }
    };
    }
