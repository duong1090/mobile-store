export interface Product {
  id: string;
  name?: string;
  price?: string;
  amount?: string;
  description?: string;
  manufacturer?: string;
  category?: string;
  status?: 'New' | 'Old' | 'Refurbished';
  url?: string;
}
