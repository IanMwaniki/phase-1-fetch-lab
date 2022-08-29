function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let books;
books= fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));
 
  return books;
}

function renderBooks(books) {
  var main = document.querySelector('main');
  books.forEach(function (book) {
    var h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
