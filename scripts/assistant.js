const webLinks = {
    google: "https://www.google.com",
    youtube: "https://www.youtube.com",
    facebook: "https://www.facebook.com",
    amazon: "https://www.amazon.com",
    wikipedia: "https://www.wikipedia.org",
    twitter: "https://www.twitter.com",
    netflix: "https://www.netflix.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    reddit: "https://www.reddit.com",
    tiktok: "https://www.tiktok.com",
    microsoft: "https://www.microsoft.com"
};

function calculator(expression) {
    let parts = expression.split(" ");
    let num1 = parseFloat(parts[0]);
    let operator = parts[1];
    let num2 = parseFloat(parts[2]);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operator";
    }
}

function error(command) {
    console.log(`${command} <-- unknown or incomplete command`);
}

let command = prompt("Ask me anything; I'll try my best");

// Redirect to a registered website
if (command.toLowerCase().startsWith("take me to ")) {
    const requestedSite = command.slice("take me to ".length).toLowerCase();
    if (webLinks.hasOwnProperty(requestedSite)) {
        window.location.href = webLinks[requestedSite];
    }
    else {
        error(command);
    }
}
// Redirect to a website where URL is provided by the user
else if (command.toLowerCase().startsWith("http")) {
    window.location.href = command;
}
// Search Engine
else if (command.toLowerCase().startsWith("search:")) {
    const searchQuery = command.slice("search:".length).toLowerCase().replace(" ", "+");
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
}
// Calculator
else if (!isNaN(command.replace(" ", ""))) {
    let result = calculator(command);
    alert(`Result: ${result}`);
}
// Command error
else {
    error(command);
}
