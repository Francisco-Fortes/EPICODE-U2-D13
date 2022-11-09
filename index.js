/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div> */
const container = document.querySelector(".cardsContainer");
console.log(container);
const getBooks = async () => {
  let unreadableData = await fetch(
    "https://striveschool-api.herokuapp.com/books"
  );
  // If you use {} you are deconstructing it
  let books = await unreadableData.json();
  console.log(books);
  renderBooks(books);
};

const renderBooks = (arrayOfBooks) => {
  arrayOfBooks.forEach((book) => {
    console.log("Inside the forEach()");
    console.log(book);
    console.log(book.title);
    container.innerHTML += `<div class="card col-sm-6 col-md-4 col-lg-3" style="width: 18rem;">
    <img src="${book.img}" class="card-img-top" alt="${book.title}+ cover">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <span class="card-text">${book.category}</span>
      <span class="card-text">${book.price}</span>
      <div class="d-flex justify-content-between">
  <button type="button" class="btn btn-primary">Add to cart</button>
  <button type="button" class="btn btn-secondary">Skip</button>
</div>;
      <div>
    </div>
  </div>`;
  });
};

window.onload = () => {
  console.log("Am I working?");
  getBooks();
};

// `<div class="card" style="width: 18rem;">
//     <img src=${book.img} class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${book.title}</h5>
//     </div>
//   </div>`;
