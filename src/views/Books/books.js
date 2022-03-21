export default function Books({ books }) {
  console.log({ books });
  console.log(books);

  return (
    <div>
      Books
      <div>
        {books.map((book) => (
          <h4 key={book.title}>{book.title}</h4>
        ))}{' '}
      </div>
    </div>
  );
}
