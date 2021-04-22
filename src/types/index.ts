type rentMode = "rent" | "purchase";

type propertyTags = "villa" | "house" | "apartment";

interface IProperty {
  id: number;
  imageLink: string;
  name: string;
  isLikedByUser: boolean;
  rentMode: rentMode;
  rating: number;
  location: string;
  tags: propertyTags[];
  price: number;
}

export { rentMode, propertyTags, IProperty };
