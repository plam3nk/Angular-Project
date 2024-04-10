import { User } from './user';

export interface Review {
  _id: string;
  comment: string;
  rating: number;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
