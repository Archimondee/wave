export interface ContentType {
  id: number;
  content_name: string;
  type: number;
  active: number;
  created_at: string;
  updated_at: string;
  novels: NovelType[];
}

export interface HighlightType {
  id: number;
  created_at: string;
  updated_at: string;
  novel: NovelType;
}

export interface NovelType {
  id: number;
  novel_title: string;
  novel_uri: string;
  novel_price: number;
  novel_sinopsis: string;
  novel_cover: string;
  novel_rating: number;
  active: number;
  status: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  chapters_count: number;
  readers_count: number;
  purchased: boolean;
  listed: boolean;
  bundle: number;
  expired_at: string;
  categories: CategoriesType[];
  language: LanguageType;
  chapters: ChaptersType[];
  author: AuthorType;
}

export interface CategoriesType {
  id: number;
  category_name: string;
  created_at: string;
  updated_at: string;
  novels_count: any;
}

export interface LanguageType {
  id: number;
  uuid: string;
  language_name: string;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface AuthorType {
  id: number;
  fullname: string;
  username: string;
  email: string;
  phone: number | any;
  photo_profile: any;
  created_at: string;
  updated_at: string;
}

export interface ListChapterType {
  data: {
    data: ChaptersType[];
    meta: MetaType;
    links: LinkType;
  };
}

export interface ChaptersType {
  id: number;
  novel_id: number;
  chapter_title: string;
  chapter_content: string;
  active: number;
  locked: number;
  status: number;
  published: number;
  created_at: string;
  updated_at: string;
  chapter_progression: number;
  published_at: string | any;
}

export interface MetaType {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export interface LinkType {
  next: string;
}
