export interface Repository {
  id: number;
  name: string;
  owner: Owner;
  forks: number;
  description: string;
  created_at: string;
  updated_at: string;
}

interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
}
