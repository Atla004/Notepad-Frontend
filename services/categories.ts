import { Category, CategoryRequest, Note } from "@/types/apiResponses";
import { authorizedWrappedFetch } from "./fetch";
import { FetchError } from "./utils";

export const createCategory = async (username: string, category: Category) => {
  try {
    const response = await authorizedWrappedFetch({
      route: `/user/${username}/category`,
      method: "POST",
      body: { ...category },
    });

    if (response?.status !== 200) {
      const errors = await response?.json();
      console.log("Response0.1: ");
      throw new FetchError(errors.error);
    }
    const json = await response?.json();
    return json.success;
  } catch (error) {
    throw new Error(`Error creating category: ${(error as Error).message}`);
  }
};

export const deleteCategory = async (username: string, _id: string) => {
  try {
    const response = await authorizedWrappedFetch({
      route: `/user/${username}/category/${_id}`,
      method: "DELETE",
    });

    if (response?.status !== 200) {
      const errors = await response?.json();
      console.log("Response0.1: ");
      throw new FetchError(errors.error);
    }
    const json = await response?.json();
    return json.success;
  } catch (error) {
    throw new Error(`Error creating category: ${(error as Error).message}`);
  }
};

export const getAllCategories = async (username: string): Promise<Category[]> => {
  try {
    const response = await authorizedWrappedFetch({
      route: `/user/${username}/categories`,
      method: "GET",
    });

    if (response?.status !== 200) {
      const errors = await response?.json();
      throw new FetchError(errors.error);
    }
    const json = await response?.json();
    return json.data;
  } catch (error) {
    throw new Error(`Error creating category: ${(error as Error).message}`);
  }
};

export const getCategoryNotes = async (username: string, categoryId: string): Promise<Note[]> => {
  try {
    const response = await authorizedWrappedFetch({
      route: `/user/${username}/notes/${categoryId}`,
      method: "GET",
    });

    if (response?.status !== 200) {
      const errors = await response?.json();
      throw new FetchError(errors.error);
    }
    const json = await response?.json();
    return json.data;
  } catch (error) {
    throw new Error(`Error creating category: ${(error as Error).message}`);
  }
};

export const editCategory = async (username: string,_id:string, category: CategoryRequest) => {
  try {
    const response = await authorizedWrappedFetch({
      route: `/user/${username}/category/${_id}`,
      method: "PUT",
      body: { ...category },
    });

    if (response?.status !== 200) {
      const errors = await response?.json();
      console.log("Response0.1: ");
      throw new FetchError(errors.error);
    }
    const json = await response?.json();
    return json.success;
  } catch (error) {
    throw new Error(`Error on EditCategory category: ${(error as Error).message}`);
  }
};
