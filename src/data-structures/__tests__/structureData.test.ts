import { data } from "../../data";
import { cleanInput } from "../helpers/cleanInput";
import { getUnit } from "../helpers/getUnit";
import { getQuantity } from "../helpers/getQuantity";

describe("cleanInput", () => {
  it("should return the correct unit", () => {
    const cleanedData = cleanInput(data);

    cleanedData.map(({ input, output }) => {
      const unit = getUnit(input);

      expect(unit).toBe(output[0].unit);
    });
  });

  it("should return the correct quantity", () => {
    const cleanedData = cleanInput(data);

    cleanedData.map(({ input, output }) => {
      const quantity = getQuantity(input);

      expect(quantity).toEqual(output[0].quantity);
    });
  });
});
