function Book({ title, author, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default Book;