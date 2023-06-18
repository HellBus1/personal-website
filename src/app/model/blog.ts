interface CreatedAt {
  seconds: number;
  nanoseconds: number;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  banner: string;
  link: string;
  createdAt: CreatedAt;
  tags: string[];
}

export default Blog;