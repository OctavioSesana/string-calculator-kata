function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const rawDelimiter = parts[0][2];
    delimiter = new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(n => parseInt(n));

  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error("negatives not allowed: " + negatives.join(", "));
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };