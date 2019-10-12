import { Article } from '@/entrys';
import { PaginationObject } from '@/dtos/_common';

export interface ArticlesWithPaginationObject extends PaginationObject {
  items: Article[];
}
