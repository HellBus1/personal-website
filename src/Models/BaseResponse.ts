interface BaseResponse<T> {
  status_code: number;
  message: string;
  data: T;
}

export default BaseResponse