interface RequestStatus<T> {
  status: string;
  data: T
};

export default RequestStatus;