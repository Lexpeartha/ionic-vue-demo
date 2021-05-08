type rentMode = "rent" | "purchase";

type propertyTags = "villa" | "house" | "apartment";

type city = "Belgrade" | "Novi Sad" | "Zrenjanin" | "Loznica";

interface IProperty {
  id: number;
  imageLink: string;
  name: string;
  isLikedByUser: boolean;
  rentMode: rentMode;
  rating: number;
  location: city;
  tags: propertyTags[];
  price: number;
  description?: string;
}

type supportedLocale = "en" | "rs";

type formattedTitle = {
  emphasizedPart: string;
  regularPart: string[];
};

export {
  rentMode,
  propertyTags,
  city,
  IProperty,
  supportedLocale,
  formattedTitle,
};
