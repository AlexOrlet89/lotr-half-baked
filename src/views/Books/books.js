import { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //fetchBooks page-load
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
      // console.log('book data', data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map((book) => (
          <h4 key={book.title}>{book.title}</h4>
        ))}{' '}
      </div>
    </div>
  );
}
