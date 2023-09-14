fetch('assets/templates/html/navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        // Checking if the navbar placeholder already contains content
        if (navbarPlaceholder.innerHTML.trim() !== '') {
            // If it contains content, insert the fetched data before the existing content
            navbarPlaceholder.innerHTML = data + navbarPlaceholder.innerHTML;
        } else {
            // If it's empty, simply set the fetched data as its content
            navbarPlaceholder.innerHTML = data;
        }
    });
