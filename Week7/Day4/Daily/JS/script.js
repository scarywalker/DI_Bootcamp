const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllButton = document.getElementById("delete-all");

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    if (searchTerm) {
        const gifData = await fetchRandomGif(searchTerm);
        appendGifToPage(gifData, searchTerm);
    }
    searchInput.value = "";
});

deleteAllButton.addEventListener("click", () => {
    gifContainer.innerHTML = "";
});

function fetchRandomGif(searchTerm) {
    const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${apiKey}`;
    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data.data);
}

function appendGifToPage(gifData, category) {
    const gifUrl = gifData.images.fixed_height.url;
    const gifElement = document.createElement("div");
    gifElement.innerHTML = `
        <img src="${gifUrl}" alt="${category} GIF">
        <button class="delete">Delete</button>
    `;
    gifContainer.appendChild(gifElement);

    const deleteButton = gifElement.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        gifContainer.removeChild(gifElement);
    });
}