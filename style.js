function search() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var articles = document.querySelectorAll('.article');

    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous search results

    articles.forEach(function(article) {
        var title = article.querySelector('.title').textContent.toLowerCase();
        var content = article.querySelector('.content').textContent.toLowerCase();
        
        if (title.includes(searchInput) || content.includes(searchInput)) {
            searchResults.appendChild(article.cloneNode(true));
        }
    });
}
