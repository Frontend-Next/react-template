import { QueryFunctionContext } from "@tanstack/react-query";
import { Pet } from "api/pets";
import { PetKeyFactory } from "api/pets/keyFactory";
import { PetMockedClient } from "api/pets/mockData";
import { Config } from "common/constants/Config";
import { axiosInstance } from "common/services/AxiosConfig";

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
