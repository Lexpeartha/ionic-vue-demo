import { formattedTitle } from "@/types";

const titleFormatter = (title: string): formattedTitle => {
  const sectionTitleWords = title.split(" ");

  const emphasizedPart = sectionTitleWords[0];
  const regularPart = sectionTitleWords.splice(1, 1);

  const formattedTitle = {
    emphasizedPart,
    regularPart,
  };

  return formattedTitle;
};

export {
  titleFormatter,
};
