import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    sendRequest,
  };
};

export default useHttp;
