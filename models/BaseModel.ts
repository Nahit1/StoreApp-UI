export interface CustomResults<T> {
  result: T;
  resultText: number;
  success: number;
}

export interface CustomPaginationResults<T> extends CustomResults<T> {
  pageCount: number;
  totalCount: number;
}
