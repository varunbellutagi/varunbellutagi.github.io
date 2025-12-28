import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../utils/blog';

function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <main className="blog">
        <section className="section blog-hero">
          <div className="section-header">
            <p className="eyebrow">Blog</p>
            <h2>Post not found</h2>
          </div>
          <p className="lead">
            The post you are looking for is not available.
          </p>
          <Link className="text-link" to="/blog">
            Back to blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="blog">
      <section className="section blog-hero">
        <div className="section-header">
          <p className="eyebrow">Blog</p>
          <h2>{post.title}</h2>
        </div>
        <p className="blog-meta">
          {post.date} ·{' '}
          {post.authorLinkedIn ? (
            <a href={post.authorLinkedIn} target="_blank" rel="noreferrer">
              {post.author}
            </a>
          ) : (
            post.author
          )}
        </p>
      </section>
      <section className="section blog-article">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </section>
      <section className="section blog-footer">
        <Link className="text-link" to="/blog">
          Back to blog
        </Link>
      </section>
    </main>
  );
}

export default BlogPost;
