import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';

interface ExecuteParams {
  asyncFunction: () => Promise<any>;
  onSuccess?: Function;
  onError?: Function;
  successMessage?: string;
  onFinally?: Function;
}

interface ResponseResult<T> {
  data: T | undefined | ErrorResponse;
  isError: boolean;
  isLoading: boolean;
}

interface ErrorResponse {
  message: string;
}

const useHttp = <T extends object>() => {
  const [responseResult, setResponseResult] = useState<ResponseResult<T>>({
    data: undefined,
    isError: false,
    isLoading: false,
  });

  const execute = useCallback(
    ({
      asyncFunction,
      onSuccess,
      onError,
      successMessage,
      onFinally,
    }: ExecuteParams): Promise<boolean> => {
      setResponseResult({ ...responseResult, isLoading: true });

      return asyncFunction()
        .then((response: T) => {
          if (onSuccess) {
            onSuccess(response);
          }

          setResponseResult({
            ...responseResult,
            data: response,
            isLoading: false,
          });

          return true;
        })
        .catch(({ response }: AxiosError<ErrorResponse>) => {
          const error = response?.data || undefined;
          setResponseResult({ ...responseResult, isError: true, data: error, isLoading: false });

          if(onError){
            onError(response?.data);
          }

          return false;
        }).finally(()=>{
            setResponseResult({ ...responseResult, isLoading: false });
        });
    },
    []
  );

  return { ...responseResult, execute };
};
