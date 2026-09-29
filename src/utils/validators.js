export function validateEmail(email) {
  if (!email.trim()) return "Email kiriting";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email formati noto'g'ri";
  return null;
}

export function validatePassword(password, minLength = 6) {
  if (!password) return "Parol kiriting";
  if (password.length < minLength)
    return `Parol kamida ${minLength} belgidan iborat bo'lishi kerak`;
  return null;
}

export function validateFullName(name) {
  if (!name.trim()) return "Ism-familiyani kiriting";
  if (name.trim().length < 3) return "Kamida 3 ta belgi bo'lishi kerak";
  return null;
}
