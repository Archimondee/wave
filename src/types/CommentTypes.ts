import type { LinkType, MetaType, NovelType } from "./NovelTypes";

export interface CommentDataType {
  data: {
    data: CommentType[];
    comment_count: number;
    meta: MetaType;
    links: LinkType;
  };
}

export interface CommentType {
  id: number;
  comment_rating: number;
  comment_content: number;
  created_at: string;
  updated_at: string;
  is_owned: boolean;
  user: UserType;
  novel: NovelType;
}

export interface UserType {
  id: number;
  user_uri: any;
  fullname: string;
  email: string;
  phone: string;
  photo_profile: string;
  personal_bio: any;
  is_admin: boolean;
  is_guest: number;
  created_at: string;
  updated_at: string;
}

export interface UserBlocksType {
  data: {
    data: UserBlockType[];
  };
}

export interface UserBlockType {
  id: number;
  fullname: string;
  photo_profile: string;
}
