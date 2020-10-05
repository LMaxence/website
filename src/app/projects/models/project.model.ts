import { Link } from './link.model';
import { Tag } from './tag.model';

export interface Project {
  title: string;
  description: string;
  id: string;
  tags: Tag[];
  links: Link[];
  startDate: string;
  endDate?: string;
  mainImageUrl?: string;
  company?: string;
}
