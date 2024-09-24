export type MarkedDate = {
  startingDay?: boolean;
  endingDay?: boolean;
  color: string;
  textColor: string;
};
export type Car = {
  id: number;
  images: string[];
  name: string;
  price: number;
  licensePlate: string;
  rating: RatingItem[];
  totalRide: number;
  location: string;
  features: Feature[];
  description: string;
  amenities?: string[];
  owner: Owner;
  isFavorite: boolean;
};
export type Owner = {
  avatar: string;
  name: string;
  rating: number;
  responseRate: string;
  acceptRate: string;
  responseIn: number;
};
export type RatingItem = {
  avatar: string;
  username: string;
  date: string;
  rating: number;
  description?: string;
};
export type Feature = {
  "Truyền động"?: string;
  "Số ghế"?: string;
  "Nhiên liệu"?: string;
  "Tiêu hao"?: string;
};
export type DateRange = {
  startDate: string;
  endDate: string;
};
