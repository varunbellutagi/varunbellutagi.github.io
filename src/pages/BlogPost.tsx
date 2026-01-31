import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../utils/blog';
import { useSEO, useStructuredData } from '../hooks/useSEO';
import Breadcrumbs from '../components/Breadcrumbs';

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  useSEO({
    title: post?.title || 'Post not found',
    description: post?.excerpt || 'The requested blog post could not be found.',
    canonical: post ? `https://msvpco.com/blog/${post.slug}` : undefined,
    ogType: 'article',
    article: post
      ? {
          publishedTime: post.date,
          author: post.author,
        }
      : undefined,
  });

  const structuredData = useMemo(() => {
    if (!post) return {};
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
        url: post.authorLinkedIn || undefined,
      },
      publisher: {
        '@type': 'Organization',
        name: 'MSVP and CO',
        url: 'https://msvpco.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://msvpco.com/blog/${post.slug}`,
      },
    };
  }, [post]);

  useStructuredData(structuredData);

  if (!post) {
    return (
      <main className="blog">
        <section className="section blog-hero">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Not Found' }]} />
          <header className="blog-header">
            <h1>Post not found</h1>
            <p className="blog-subtitle">
              The article you're looking for doesn't exist or has been moved.
            </p>
          </header>
        </section>
        <section className="section blog-content">
          <Link to="/blog" className="button secondary">
            Back to blog
          </Link>
        </section>
      </main>
    );
  }

  const readingTime = getReadingTime(post.content);

  return (
    <main className="blog">
      <article>
        <section className="section blog-hero">
          <Breadcrumbs
            items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
          />
          <header className="blog-header blog-post-header">
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="meta-separator">·</span>
              <span>{readingTime} min read</span>
              <span className="meta-separator">·</span>
              {post.authorLinkedIn ? (
                <a
                  href={post.authorLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-author-link"
                >
                  {post.author}
                </a>
              ) : (
                <span>{post.author}</span>
              )}
            </div>
          </header>
        </section>

        <section className="section blog-article">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </section>

        <section className="section blog-footer">
          <div className="blog-footer-content">
            <div className="blog-footer-cta">
              <p>Have questions about this topic?</p>
              <Link to="/#contact" className="button primary">
                Get in touch
              </Link>
            </div>
            <Link className="blog-back-link" to="/blog">
              ← Back to all articles
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

export default BlogPost;
