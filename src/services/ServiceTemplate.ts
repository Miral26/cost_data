import { Application } from "../io/responses/commonResponses";
import { axiosPublic } from "./generic/AxiosInterceptor";

export const getApplications = (): Promise<Application> => {
  return axiosPublic({
    url: "applications",
    method: "get",
  }).then((resp) => resp.data);
};

export const getApplicationByName = (name: string): Promise<Application> => {
  return axiosPublic({
    url: `applications/${name}`,
    method: "get",
  }).then((resp) => resp.data);
};
