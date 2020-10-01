import math from "mathjs-expression-parser";
import { Data } from "../../types";

const operationRegex = /\d+([⁄-]\d+)/;
const splitRegex = /([\d.]+(?!\d.+)|[^a-zA-Z.\d])/;
const punctuationRegex = /^[,:!?\s]/;

export function cleanInput(data: Data[]) {
  const dataWithCorrectQuantities = performMathematicalOperations(data);
  return splitStrings(dataWithCorrectQuantities);
}

function performMathematicalOperations(data: Data[]) {
  return data.map(({ input, output }) => {
    const match = input.match(operationRegex);

    if (!match) return { input, output };

    const [exp] = match;

    const res = handleMathExpression(exp);

    const newInput = input.replace(operationRegex, `${res}`);
    return { input: newInput, output };
  });
}

function handleMathExpression(exp: string) {
  if (exp.includes("-")) {
    return handleMinus(exp);
  }

  return handleDivide(exp);
}

function handleDivide(exp: string) {
  const replacedAnnoyingSlash = exp.replace("⁄", "/");
  return math.eval(replacedAnnoyingSlash);
}

function handleMinus(exp: string) {
  return exp.charAt(exp.length - 1);
}

function splitStrings(input: Data[]) {
  return input.map(({ input, output }) => {
    return {
      output,
      input: input
        .split(splitRegex)
        .filter((x) => !x.match(punctuationRegex) && x),
    };
  });
}
