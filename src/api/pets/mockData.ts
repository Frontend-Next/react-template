/* eslint-disable @typescript-eslint/no-use-before-define */
import { QueryFunctionContext } from "@tanstack/react-query";
import { Pet } from "api/pets";
import { PetKeyFactory } from "api/pets/keyFactory";

const fetchPageData = async ({
  queryKey,
}: QueryFunctionContext): Promise<Pet[]> => {
  const { filter } = (<ReturnType<typeof PetKeyFactory.pageData>>queryKey)[0];
  return Promise.resolve(
    mockedPets.slice(filter.page, filter.page + filter.pageSize),
  );
};

const fetchCount = async (): Promise<number> =>
  Promise.resolve(mockedPets.length);

export const PetMockedClient = { fetchPageData, fetchCount };

const mockedPets: Pet[] = [
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
  {
    id: 1,
    name: "Bryguś",
    breed: "Welsh Corgi Pembroke",
    race: "Dog",
    dateOfBirth: "14.09.2018",
  },
  {
    id: 2,
    name: "Xenka",
    breed: "Dachowiec Czarny Mumbajski",
    race: "Cat",
    dateOfBirth: "10.05.2021",
  },
];
