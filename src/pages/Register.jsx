import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  validateEmail,
  validateFullName,
  validatePassword,
} from '../utils/validators.js';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function validate(values) {
  const errors = {
    fullName: validateFullName(values.fullName),
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };

  if (!values.confirmPassword) {
    errors.confirmPassword = "Parolni tasdiqlang";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Parollar mos kelmadi";
  }

  return errors;
}

function Register() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    const hasError = Object.values(validationErrors).some(Boolean);
    if (!hasError) setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="auth-card">
        <div className="auth-success">
          <span className="auth-success-icon">✓</span>
          <p className="page-title" style={{ fontSize: '20px', marginBottom: 0 }}>
            Muvaffaqiyatli ro&apos;yxatdan o&apos;tdingiz!
          </p>
          <p className="page-subtitle" style={{ marginBottom: 0 }}>
            {values.fullName}, hisobingiz yaratildi.
          </p>
          <Link to="/login" className="auth-switch" style={{ marginTop: '8px' }}>
            Kirish sahifasiga o&apos;tish →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="auth-card" onSubmit={handleSubmit} noValidate>
      <div>
        <h1 className="page-title">Ro&apos;yxatdan o&apos;tish</h1>
        <p className="page-subtitle" style={{ marginBottom: 0 }}>
          Yangi hisob yarating
        </p>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="fullName">
          Ism-familiya
        </label>
        <input
          id="fullName"
          className={`field-input ${
            touched.fullName && errors.fullName ? 'has-error' : ''
          }`}
          type="text"
          placeholder="Ism Familiya"
          value={values.fullName}
          onChange={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
        />
        {touched.fullName && errors.fullName && (
          <span className="field-error">{errors.fullName}</span>
        )}
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

      <div className="field-group">
        <label className="field-label" htmlFor="confirmPassword">
          Parolni tasdiqlash
        </label>
        <input
          id="confirmPassword"
          className={`field-input ${
            touched.confirmPassword && errors.confirmPassword ? 'has-error' : ''
          }`}
          type="password"
          placeholder="••••••"
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span className="field-error">{errors.confirmPassword}</span>
        )}
      </div>

      <button className="auth-btn" type="submit">
        Ro&apos;yxatdan o&apos;tish
      </button>

      <p className="auth-switch">
        Hisobingiz bormi? <Link to="/login">Kiring</Link>
      </p>
    </form>
  );
}

export default Register;
