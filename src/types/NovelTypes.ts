export interface ContentType {
  uuid: string;
  content_name: string;
  content_sort: number;
  content_icon_path: string;
  content_icon_filename: string;
  content_slug: string;
  type: number;
  active: number;
  novel: NovelType[];
}

export interface NovelType {
  uuid: string;
  title: string;
  author: string;
  sinopsis: string;
  cover_path: string;
  cover_file_name: string;
  rating: any;
  price: number;
  active: number;
  status: number;
  language: string;
}

export interface CategoryType {
  id: number;
  uuid: string;
  category_name: string;
  active: number;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  pivot_novel_category?: any;
}
