export function paginateArray(
  charactersArray: Array<any>,
  pageSize: number,
  currentPage: number
) {
  return charactersArray.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
}
