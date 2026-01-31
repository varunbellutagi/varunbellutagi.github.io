import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blog';

function Blog() {
  const posts = getAllPosts();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="blog">
      <section className="section blog-hero">
        <div className="section-header">
          <p className="eyebrow">Blog</p>
          <h2>Insights, compliance updates, and advisory guidance</h2>
        </div>
        <p className="lead">
          Practical articles for individuals and companies navigating tax,
          compliance, and financial reporting.
        </p>
      </section>
      <section className="section">
        <div className="grid three">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-meta">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link className="text-link-read-more" to={`/blog/${post.slug}`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
        {posts.length === 0 && (
          <p className="lead">No blog posts yet. Check back soon.</p>
        )}
      </section>
    </main>
  );
}

export default Blog;
