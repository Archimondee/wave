export interface NovelType {
  id: number;
  novel_title: string;
  novel_cover: string;
  chapters_count: number;
  author: AuthorType;
}

export interface AuthorType {
  username: string;
}

export interface CategoriesType {
  id: number;
  category_name: string;
  created_at: string;
  updated_at: string;
  novels_count: any;
}

export interface LinkType {
  next: string;
}

export interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}
