import { formattedTitle } from "@/types";

const titleFormatter = (title: string): formattedTitle => {
  const sectionTitleWords = title.split(" ");

  const emphasizedPart = sectionTitleWords[0];
  const regularPart = sectionTitleWords.splice(1, 1);

  return {
    emphasizedPart,
    regularPart,
  } as formattedTitle;
};

export { titleFormatter };
