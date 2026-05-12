function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const rawDelimiter = parts[0][2];
    delimiter = new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    numbers = parts[1];
  }

  return numbers.split(delimiter).reduce((sum, n) => sum + parseInt(n), 0);
}

module.exports = { add };