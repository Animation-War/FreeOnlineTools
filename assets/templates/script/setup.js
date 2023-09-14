fetch('assets/templates/html/setup.html')
    .then(response => response.text())
    .then(data => document.getElementById('head').innerHTML += data);