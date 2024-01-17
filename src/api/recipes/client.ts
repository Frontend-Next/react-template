import { QueryFunctionContext } from "@tanstack/react-query";
import { Recipe } from "api/recipes";
import { RecipeKeyFactory } from "api/recipes/keyFactory";
import { mockedRecipes } from "api/recipes/mockData";
import { Config } from "common/constants/Config";
import { axiosInstance } from "common/services/AxiosConfig";

const provideDataForFilters = async (): Promise<Recipe[]> => {
  if (Config.USE_MOCKED_DATA) {
    return mockedRecipes;
  }

  return axiosInstance
    .get<Recipe[]>("recipes/filter")
    .then((response) => response.data);
};

const providePageData = async ({
  queryKey,
}: QueryFunctionContext): Promise<Recipe[]> => {
  const { tableData, filter } = (<ReturnType<typeof RecipeKeyFactory.pageData>>(
    queryKey
  ))[0];

  if (Config.USE_MOCKED_DATA) {
    return mockedRecipes;
  }
  const urlParams = new URLSearchParams({
    page: tableData.page.toString(),
    pageSize: tableData.pageSize.toString(),
  });

  return axiosInstance
    .post<Recipe[]>(`recipes?${urlParams}`, filter)
    .then((response) => response.data);
};

const provideDataCount = async ({
  queryKey,
}: QueryFunctionContext): Promise<number> => {
  const { filter } = (<ReturnType<typeof RecipeKeyFactory.dataCount>>(
    queryKey
  ))[0];

  if (Config.USE_MOCKED_DATA) {
    return mockedRecipes.length;
  }
  return axiosInstance
    .post<number>("recipes/count", filter)
    .then((response) => response.data);
};

export const RecipeClient = {
  provideDataForFilters,
  providePageData,
  provideDataCount,
};
