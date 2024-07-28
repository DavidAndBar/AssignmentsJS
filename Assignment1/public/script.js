document.getElementById('jokeButton').addEventListener('click', () => {
    fetch('/joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('jokeDisplay').innerText = data.joke;
        });
});