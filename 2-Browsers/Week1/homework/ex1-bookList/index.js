//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ulElement = document.createElement('ul');
  books.forEach((book) => {
    const liElement = document.createElement('li');
    const para = document.createElement('p');
    para.textContent = `${book.title} - ${book.author}`;
    const image = document.createElement('img');
    if (book.author === 'Don Norman') {
      image.src = './assets/the_design_of_everyday_things.jpg';
    }
    if (book.author === 'Brian Christian') {
      image.src = './assets/the_most_human_human.jpg';
    }
    if (book.author === 'Andrew Hunt') {
      image.src = './assets/the_pragmatic_programmer.jpg';
    }
    liElement.appendChild(para);
    liElement.appendChild(image);
    ulElement.appendChild(liElement);
    liElement.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
  });

  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
