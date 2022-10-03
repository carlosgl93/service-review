const spanish = {
  0: "Idioma",
  1: "Educadora de parvulos",
  2: "Postgrado: Educacion Waldorf (3 años)",
};

const english = {
  0: "Language",
  1: "Kindergarden educator",
  2: "Postgraduate: Waldorf Education (3 years)",
};

export const translate = (id: number, language: string) => {
  if (language == "es") {
    return spanish[id as keyof typeof spanish];
  } else return english[id as keyof typeof spanish];
};
