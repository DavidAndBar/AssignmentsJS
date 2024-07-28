document.addEventListener('DOMContentLoaded', () => {
    fetch('/jokes')
        .then(response => response.json())
        .then(jokes => {
            const jokesList = document.getElementById('jokesList');
            jokes.forEach(joke => {
                const jokeItem = document.createElement('li');
                jokeItem.innerHTML = `
                    <div class="setup">${joke.setup}</div>
                    <div class="punchline">${joke.punchline}</div>
                `;
                jokeItem.addEventListener('click', () => {
                    jokeItem.classList.toggle('revealed');
                });
                jokesList.appendChild(jokeItem);
            });
        });
});