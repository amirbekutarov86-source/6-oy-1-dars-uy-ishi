import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className="page-title">Xush kelibsiz</h1>
      <p className="page-subtitle">
        Bu loyiha JSONPlaceholder API asosida qurilgan blog va do&apos;kon
        namunasi.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link className="add-to-cart-btn" to="/posts">
          Postlarni ko&apos;rish
        </Link>
        <Link
          className="add-to-cart-btn"
          style={{ background: 'transparent', border: '1px solid var(--surface-line)' }}
          to="/register"
        >
          Ro&apos;yxatdan o&apos;tish
        </Link>
      </div>
    </div>
  );
}

export default Home;
