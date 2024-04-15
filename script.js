document.addEventListener("DOMContentLoaded", function () {
    const username = "your-username";
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("avatar").src = data.avatar_url;
            document.getElementById("username").textContent = data.login;
            document.getElementById("bio").textContent = data.bio || "No bio available";
        })
        .catch(error => console.error('Error fetching GitHub profile:', error));

    fetch(`${apiUrl}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById("repoList");
            data.forEach(repo => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                repoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching GitHub repositories:', error));
});