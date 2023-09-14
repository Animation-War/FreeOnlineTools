const webLinks = {
    // Google sites
    google: "https://www.google.com",
    youtube: "https://www.youtube.com",
    gmail: "https://mail.google.com/mail/u/0/#inbox",
    bard: "https://bard.google.com/",

    wikipedia: "https://www.wikipedia.org",
    
    // microsoft
    microsoft: "https://www.microsoft.com",
    chatgpt: "https://chat.openai.com/",
    github: "https://github.com/",
    
    
    amazon: "https://www.amazon.com",
    netflix: "https://www.netflix.com",
    
    // Social Media
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    reddit: "https://www.reddit.com",
    tiktok: "https://www.tiktok.com",
    whatsapp: "https://web.whatsapp.com/",
    linkedin: "https://www.linkedin.com",

    // Tools
    pintrest: "https://www.pinterest.com/",
    virustotal: "https://www.virustotal.com/",

    // Other
    replit: "https://replit.com/~",
    aternos: "https://aternos.org/servers/",
    typerush: "https://www.typerush.com",

    mysite: "http://www.warstudioscitybuild.unaux.com/",
};

function executeCommand() {
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const command = commandInput.value.trim().toLowerCase();

    // Checking the command and take specific actions
    if (command === "time") {
        const currentTime = new Date().toLocaleTimeString();
        output.textContent = `Current time is ${currentTime} `;
    }
    else if (command === "clear") {
        output.textContent = "";
        commandInput.value = "";
    }
    // Redirect to a registered website
    else if (command.toLowerCase().startsWith("redirect: ")) {
        const requestedSite = command.slice("redirect: ".length).toLowerCase();
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
    else if (command.toLowerCase().startsWith("corrupt")){
        const webpage = document.getElementById("webpage");
        webpage.textContent = `ops, Something Went Very VERY Wrong!`
        window.location.href = `/404`
    }
    else if(command.toLowerCase().startsWith("delete:")){
        if(command.toLowerCase().startsWith("delete: ")){
            let formatedcommand = command.slice("delete: ".length).toLowerCase();
            if (formatedcommand == "navbar"){
                const navbar = document.getElementById("navbar-placeholder");
                navbar.textContent = `404: navbar counldn't be found`
            }
            else if (formatedcommand == "footer"){
                const navbar = document.getElementById("footer-placeholder");
                navbar.textContent = `404: footer counldn't be found`
            }
        }
        else if(command.toLowerCase().startsWith("delete:")){
            let formatedcommand = command.slice("delete:".length).toLowerCase();
            if (formatedcommand == "navbar"){
                const navbar = document.getElementById("navbar-placeholder");
                navbar.textContent = `404: navbar counldn't be found`
            }
            else if (formatedcommand == "footer"){
                const navbar = document.getElementById("footer-placeholder");
                navbar.textContent = `404: footer counldn't be found`
            }
        }
    }
    else if(command.toLowerCase().startsWith("$ sudo ")){
        let formatedcommand = command.slice("$ sudo ".length).toLowerCase();
        
    }
    else {
        output.textContent = `${command}<-- 
        Unknown command. Try again.`;
    }
}

function clearoutput(){
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const command = commandInput.value.trim().toLowerCase();

    output.textContent = "";
    commandInput.value = "";
}