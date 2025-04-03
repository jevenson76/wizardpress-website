export interface ManuscriptSubmission {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  manuscript_title: string;
  genre: string;
  word_count: string;
  synopsis: string;
  target_audience: string;
  author_bio: string;
  marketing_plan: string;
}

export interface NewsletterSubscription {
  id?: string;
  created_at?: string;
  name?: string;
  email: string;
  active?: boolean;
}

export interface PreOrder {
  id?: string;
  created_at?: string;
  book_id: string;
  email: string;
  name?: string;
  quantity: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}