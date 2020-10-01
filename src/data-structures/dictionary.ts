const GRAM = "g";
const LITER = "l";
const TEASPOON = "tsp";
const TABLESPOON = "tbsp";
const MILLILITRE = "ml";
const CENTIMETER = "cm";
const SMALL = "small";
const LARGE_HANDFULS = "large handfuls";
const TIN = "tin";
const MEDIUM = "medium";
const LARGE = "large";
const HEAD = "head";
const HANDFUL = "handful";
const POT = 'pot';

export const units = {
  "large handfuls": LARGE_HANDFULS,
  g: GRAM,
  gram: GRAM,
  grams: GRAM,
  ml: MILLILITRE,
  mil: MILLILITRE,
  l: LITER,
  small: SMALL,
  tsp: TEASPOON,
  tbsp: TABLESPOON,
  "tea spoon": TEASPOON,
  teaspoon: TEASPOON,
  spoons: TABLESPOON,
  cm: CENTIMETER,
  tablespoon: TABLESPOON,
  tin: TIN,
  medium: MEDIUM,
  large: LARGE,
  head: HEAD,
  handful: HANDFUL,
  handfuls: HANDFUL,
  pot: POT,
};

export const unitKeys = Object.keys(units);
