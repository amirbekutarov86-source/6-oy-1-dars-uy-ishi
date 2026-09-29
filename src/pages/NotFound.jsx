import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="status-box">
      <p className="page-title">404</p>
      <p>Bu sahifa topilmadi.</p>
      <Link className="back-link" to="/">
        ← Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default NotFound;
