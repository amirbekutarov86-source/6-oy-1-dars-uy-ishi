import { Link, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  const message =
    error?.statusText || error?.message || "Noma'lum xatolik yuz berdi";

  return (
    <div className="status-box is-error">
      <p className="page-title">Nimadir xato ketdi</p>
      <p>{message}</p>
      <Link className="back-link" to="/">
        ← Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default ErrorBoundary;
