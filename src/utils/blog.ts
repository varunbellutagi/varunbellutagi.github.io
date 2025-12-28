export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  authorLinkedIn: string;
  content: string;
};

const markdownFiles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFrontmatter(raw: string) {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw.trim() };
  }

  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    return { data: {}, content: raw.trim() };
  }

  const frontmatter = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trim();
  const data: Record<string, string> = {};

  frontmatter.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (!key || rest.length === 0) return;
    const value = rest
      .join(':')
      .trim()
      .replace(/^["']|["']$/g, '');
    data[key.trim()] = value;
  });

  return { data, content };
}

const posts: BlogPost[] = Object.entries(markdownFiles).map(([path, raw]) => {
  const parsed = parseFrontmatter(raw as string);
  const slug = path.split('/').pop()?.replace('.md', '') ?? '';
  const title = parsed.data.title || slug;
  const date = parsed.data.date || '';
  const excerpt = parsed.data.excerpt || '';
  const author = parsed.data.author || 'MSVP and CO';
  const authorLinkedIn = parsed.data.authorLinkedIn || '';

  const cleanedContent =
    parsed.content.trim().startsWith('# ')
      ? parsed.content.trim().split('\n').slice(1).join('\n').trim()
      : parsed.content.trim();

  return {
    slug,
    title,
    date,
    excerpt,
    author,
    authorLinkedIn,
    content: cleanedContent,
  };
});

export function getAllPosts() {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}
