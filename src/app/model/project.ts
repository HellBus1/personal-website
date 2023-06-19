interface CreatedAt {
  seconds: number;
  nanoseconds: number;
}

interface Project {
  id: string;
  name: string;
  shortDescription: string;
  banner: string;
  path: string;
  createdAt: CreatedAt;
  stacks: string[];
}

export default Project;