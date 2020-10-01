export interface Data {
  input: string;
  output: Ingredient[];
}

interface Ingredient {
  name: string;
  quantity: string;
  unit?: string;
}
