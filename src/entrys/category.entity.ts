import { Base } from '@/entrys';

export interface Category extends Base {
  name: string;
  slug: string;
  parent_id: number;
  description?: string;
  children?: Category[];
  key?: string;
}
