import { QueryFunctionContext } from "@tanstack/react-query";
import { Config } from "common/constants/Config";
import { axiosInstance } from "common/services/AxiosConfig";
import { Pet } from ".";
import { PetKeyFactory } from "./keyFactory";
import { PetMockedClient } from "./mockData";

const fetchPageData = async ({
  queryKey,
}: QueryFunctionContext): Promise<Pet[]> => {
  const { filter } = (<ReturnType<typeof PetKeyFactory.pageData>>queryKey)[0];
  return axiosInstance
    .post<Pet[]>("pets", filter)
    .then((response) => response.data);
};

const fetchCount = async (): Promise<number> =>
  axiosInstance.get<number>("pets/count").then((response) => response.data);

export const PetClient = Config.USE_MOCKED_DATA
  ? { ...PetMockedClient }
  : { fetchPageData, fetchCount };
