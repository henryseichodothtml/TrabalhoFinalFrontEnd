import { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons?_locale=pt_BR&_quantity=5')
      .then(res => res.json())
      .then(data => {
        const reviewsComNomes = data.data.map((item, i) => ({
          nome: `${item.firstname + ' ' + item.lastname}`,
          comentario: item.content,
          nota: Math.floor(Math.random() * 5) + 1 // de 1 a 5
        }));
        setReviews(reviewsComNomes);
      });
  }, []);

  return (
    <div>
      <h2>Avaliações dos Leitores</h2>
      {reviews.map((rev, i) => (
        <div key={i} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <strong>{rev.nome}</strong> - ⭐ {rev.nota}/5
          <p>{rev.comentario}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;