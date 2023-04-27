import { ReactNode } from "react";

export interface PostType {
  number: string;
  title: string;
  url: string;
  comments: number;
  body: string | "";
  created_at: string;
  updated_at: string;
  html_url: string;
}