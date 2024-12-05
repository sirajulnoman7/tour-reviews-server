type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};

const sendResponse = <T>(res: any, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
