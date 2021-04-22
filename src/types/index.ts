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

type supportedLocale = "en" | "rs";

type formattedTitle = {
  emphasizedPart: string;
  regularPart: string[];
};

export { rentMode, propertyTags, IProperty, supportedLocale, formattedTitle };
