import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=15';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setStatus('loading');
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Server javob bermadi');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  };

  if (status === 'loading') {
    return <p className="status-box">Postlar yuklanmoqda...</p>;
  }

  if (status === 'error') {
    return (
      <div className="status-box is-error">
        <p>Postlarni olishda xatolik yuz berdi.</p>
        <button className="retry-btn" onClick={fetchPosts}>
          Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">Postlar</h1>
      <p className="page-subtitle">JSONPlaceholder API&apos;dan olingan {posts.length} ta post</p>

      <div className="posts-list">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`} className="post-card">
            <p className="post-title">{post.title}</p>
            <p className="post-excerpt">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
