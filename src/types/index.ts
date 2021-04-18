type rentMode = "rent" | "purchase";

interface IProperty {
  id: number;
  imageLink: string;
  name: string;
  isLikedByUser: boolean;
  rentMode: rentMode;
  rating: number;
  location: string;
  price: number;
}

export { IProperty, rentMode };
