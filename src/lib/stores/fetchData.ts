// import { client } from "@lib/utils/client";
import { categoryQuery, getSinglePost } from '@lib/utils/queries';
import { readable } from "svelte/store";
import { sanityClient } from "sanity:client";
interface NavLinks {
  _id: string;
  title: string;  
  description: string;
  slug: string;
  mainImage: any;
}

async function getData() {
  const response = await sanityClient.fetch(categoryQuery);
  return response as NavLinks[];
}
// Create a readable store with an empty array as the initial value
export const categoryStore = readable<NavLinks[]>([], set => {
  async function fetchData() {
      try {
        const category = await getData();
        set(category); // Set the initial value of the store
      } catch (error) {
        console.error('Error fetching categories', error);
      }
  }
  fetchData(); // Initial data fetch
});

import { getPosts } from '@lib/utils/queries';

interface Posts {
  title: any,
  description: any,
  slug: string,
  categoryQuery: string,
  [key: string]: any;
}
interface PostsData {
  posts: Posts[],
  categoryQuery: string
}

export const fetchList = async (params: string): Promise<PostsData> => {
  const categoryQuery = params;
  try {
    const posts = await sanityClient.fetch(getPosts(categoryQuery)) as Posts[];
    if (posts) {
      return {
        posts,
        categoryQuery
      };
    } else {
      throw new Error('Error fetching list');
    }
  } catch (error) {
    throw new Error(`Error fetching list: ${error.message}`);
  }
};
export const fetchSingle = (async ( category:string, slug:string ) => {
  const formattedCategory = category ? category.toLowerCase() : '';
	const data = (await sanityClient.fetch(getSinglePost(formattedCategory, slug))) as Posts[];
	if (data){
		return {
			data,
		} 
	}
  else
  return ('Error fetching');
});
