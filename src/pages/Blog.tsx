import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/blog';
import { useSEO, useStructuredData } from '../hooks/useSEO';
import Breadcrumbs from '../components/Breadcrumbs';

function Blog() {
  const posts = getAllPosts();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useSEO({
    title: 'Blog',
    description:
      'Insights on tax compliance, GST filing, financial reporting, and advisory guidance for individuals and businesses in India.',
    canonical: 'https://msvpco.com/blog',
  });

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'MSVP and CO Blog',
      description:
        'Tax, compliance, and financial advisory articles for individuals and companies.',
      url: 'https://msvpco.com/blog',
      publisher: {
        '@type': 'Organization',
        name: 'MSVP and CO',
        url: 'https://msvpco.com',
      },
    }),
    []
  );

  useStructuredData(structuredData);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const hasPosts = posts.length > 0;

  return (
    <main className="blog">
      <section className="section blog-hero">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        <header className="blog-header">
          <h1>Blog</h1>
          <p className="blog-subtitle">
            Insights on tax compliance, GST, and financial advisory for
            individuals and businesses.
          </p>
        </header>
      </section>

      <section className="section blog-content">
        {hasPosts ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-card-content">
                  <time className="blog-date" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-author">{post.author}</span>
                    <Link
                      className="blog-read-more"
                      to={`/blog/${post.slug}`}
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-coming-soon">
            <div className="coming-soon-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <h2 className="coming-soon-title">Coming Soon</h2>
            <p className="coming-soon-text">
              We're working on insightful articles about tax compliance, GST
              filing, and financial advisory. Check back soon for practical
              guidance and updates.
            </p>
            <div className="coming-soon-topics">
              <span className="topic-pill">GST Compliance</span>
              <span className="topic-pill">Tax Planning</span>
              <span className="topic-pill">Audit Preparation</span>
              <span className="topic-pill">Financial Reporting</span>
            </div>
            <Link to="/#contact" className="button primary">
              Contact us
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Blog;
