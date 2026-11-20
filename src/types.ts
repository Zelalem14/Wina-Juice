export interface MenuItem {
  id: string;
  nameAm: string;
  nameEn: string;
  price: number;
  priceNote?: string;
  categoryId: string;
  descriptionAm?: string;
  descriptionEn?: string;
  ingredientsAm?: string[];
  dietary?: ('fasting' | 'vegetarian' | 'chicken' | 'beef' | 'fish' | 'juice' | 'kids')[];
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  nameAm: string;
  nameEn: string;
  iconName: string;
  themeColor: 'red' | 'green' | 'teal';
  side: 1 | 2;
  description?: string;
  image: string;
}

export interface BranchContact {
  id: string;
  nameAm: string;
  nameEn: string;
  phone: string;
  telUri: string;
  location?: string;
}

export interface TakeAwayItem {
  id: string;
  nameAm: string;
  nameEn: string;
  price: number;
}

export interface ExtraItem {
  id: string;
  nameAm: string;
  nameEn: string;
  price: number;
}
