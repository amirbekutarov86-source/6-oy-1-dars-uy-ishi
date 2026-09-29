import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validators.js';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (v) => ({
    email: validateEmail(v.email),
    password: validatePassword(v.password),
  });

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ email: true, password: true });

    const hasError = Object.values(validationErrors).some(Boolean);
    if (!hasError) setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="auth-card">
        <div className="auth-success">
          <span className="auth-success-icon">✓</span>
          <p className="page-title" style={{ fontSize: '20px', marginBottom: 0 }}>
            Xush kelibsiz!
          </p>
          <p className="page-subtitle" style={{ marginBottom: 0 }}>
            {values.email} bilan muvaffaqiyatli kirdingiz (demo).
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="auth-card" onSubmit={handleSubmit} noValidate>
      <div>
        <h1 className="page-title">Kirish</h1>
        <p className="page-subtitle" style={{ marginBottom: 0 }}>
          Hisobingizga kiring
        </p>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={`field-input ${
            touched.email && errors.email ? 'has-error' : ''
          }`}
          type="email"
          placeholder="email@misol.com"
          value={values.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        {touched.email && errors.email && (
          <span className="field-error">{errors.email}</span>
        )}
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="password">
          Parol
        </label>
        <input
          id="password"
          className={`field-input ${
            touched.password && errors.password ? 'has-error' : ''
          }`}
          type="password"
          placeholder="••••••"
          value={values.password}
          onChange={handleChange('password')}
          onBlur={handleBlur('password')}
        />
        {touched.password && errors.password && (
          <span className="field-error">{errors.password}</span>
        )}
      </div>

      <button className="auth-btn" type="submit">
        Kirish
      </button>

      <p className="auth-switch">
        Hisobingiz yo&apos;qmi? <Link to="/register">Ro&apos;yxatdan o&apos;ting</Link>
      </p>
    </form>
  );
}

export default Login;
