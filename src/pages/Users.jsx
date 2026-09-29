import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Users() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setStatus('loading');
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Server javob bermadi');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  };

  if (status === 'loading') {
    return <p className="status-box">Foydalanuvchilar yuklanmoqda...</p>;
  }

  if (status === 'error') {
    return (
      <div className="status-box is-error">
        <p>Ma&apos;lumotlarni olishda xatolik yuz berdi.</p>
        <button className="retry-btn" onClick={fetchUsers}>
          Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">Foydalanuvchilar</h1>
      <p className="page-subtitle">JSONPlaceholder API&apos;dan olingan {users.length} ta foydalanuvchi</p>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p className="user-name">{user.name}</p>
            <p className="user-meta">📞 {user.phone}</p>
            <p className="user-meta">✉ {user.email}</p>
            <p className="user-meta">📍 {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
