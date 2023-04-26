import { burgers } from "../data/burgers";
import { IItems } from "../types/types";

export const calculatePrice = (
  currBurger: string,
  additions: null | IItems[]
): string => {
  let price = 0.0;

  price = burgers.find((burger) => currBurger === burger.value)?.price!;

  if (additions !== null) {
    for (let i = 0; i < additions.length; i++) {
      price += additions[i].price;
    }
  }

  return price.toFixed(2);
};
