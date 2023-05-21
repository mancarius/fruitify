import { Photo } from "pexels";

/* Represents a fruit. */
export interface Fruit {
  id: number;
  name: string;
  genus: string;
  family: string;
  order: string;
  nutritions: FruitNutritions;
  vitamins?: string[];
  minerals?: string[];
}

/* Represents the nutritions of a fruit. */
export interface FruitNutritions {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

/* Represents the types of nutritions of a fruit. */
export type FruitNutritionTypes = keyof FruitNutritions;

/* Represents a fruit with photo. */
export interface FruitWithPhoto extends Fruit {
  /* The photo of the fruit. */
  photo: Photo | null;
}