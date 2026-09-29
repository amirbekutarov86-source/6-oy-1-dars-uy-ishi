import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function Cart() {
  const { items, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="page-title">Savat</h1>
      <p className="page-subtitle">
        Savatga qo&apos;shilgan postlar ({items.length} ta)
      </p>

      {items.length === 0 ? (
        <div className="status-box">
          <p>Savat bo&apos;sh.</p>
          <Link className="back-link" to="/posts">
            ← Postlarga o&apos;tish
          </Link>
        </div>
      ) : (
        <div className="cart-list">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="cart-item-title">{item.title}</span>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                O&apos;chirish
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
