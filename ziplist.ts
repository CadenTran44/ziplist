function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];

  for (let i = 0; i < list1.length; i += 1) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];

  list1.forEach((item: unknown, index: number) => {
    result.push(item);
    result.push(list2[index]);
  });

  return result;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
