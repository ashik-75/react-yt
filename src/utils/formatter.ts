import numeral from "numeral";

export function formatViews(views: string) {
  const formattedNumbers = numeral(views).format("0.0a");

  return formattedNumbers;
}
