import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');
  const { addToCart, items } = useCart();

  useEffect(() => {
    setStatus('loading');
    fetch(`${API_URL}/${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Topilmadi');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, [postId]);

  if (status === 'loading') {
    return <p className="status-box">Yuklanmoqda...</p>;
  }

  if (status === 'error' || !post) {
    return (
      <div className="status-box is-error">
        <p>Bu post topilmadi.</p>
        <Link className="back-link" to="/posts">
          ← Postlarga qaytish
        </Link>
      </div>
    );
  }

  const isInCart = items.some((item) => item.id === post.id);

  return (
    <div>
      <Link className="back-link" to="/posts">
        ← Postlarga qaytish
      </Link>

      <div className="single-post-card">
        <h1 className="single-post-title">{post.title}</h1>
        <p className="single-post-body">{post.body}</p>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(post)}
          disabled={isInCart}
        >
          {isInCart ? "Savatda bor ✓" : "Savatga qo'shish"}
        </button>
      </div>
    </div>
  );
}

export default SinglePost;
