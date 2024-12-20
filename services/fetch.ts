import { fetchData } from "./localstorage";
import { FetchParams } from "@/types/fetch";

const backendUrl = process.env.EXPO_PUBLIC_BACKEND_URL as string;


export const wrappedFetch = async (params: FetchParams):Promise<Response>  => {
  const { route, method, body, headers } = params;
  const url = `${backendUrl}${route}`;
  const request: RequestInit = { method };
  request.body = body ? JSON.stringify(body) : "";
  console.log(url, request)
  request.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headers,
  };
  console.log("url: ", url);
  console.log("fetch: ", JSON.stringify(request, null, 2));


  return await fetch(url, { ...request });
};

export const authorizedWrappedFetch = async (params: FetchParams):Promise<Response> => {
  console.log(params)
  try {
    const token = await fetchData("jwtoken");
    console.log(token)
    const newParams: FetchParams = {
      route: params.route,
      method: params.method,
      headers: {
        ...params.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    
    if (params.body) newParams.body = params.body;
    return await wrappedFetch(newParams);
  } 
  catch(error) {
    throw new Error('User not logged in')
  }
};
