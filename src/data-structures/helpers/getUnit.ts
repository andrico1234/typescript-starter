import { unitKeys, units } from "../dictionary";

export function getUnit(input: string[]) {
  const joinedString = input.join(" ");
  const spacePrependedString = ` ${joinedString} `;

  const res = unitKeys.find((unit) => {
    return spacePrependedString.toLowerCase().match(` ${unit} `);
  });

  return units[res];
}
