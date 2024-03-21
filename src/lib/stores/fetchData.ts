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
export const categoryStore = readable<NavLinks[]>([], (set) => {
  (async () => {
    try {
      const categories = await sanityClient.fetch(categoryQuery);
      set(categories); // Set the fetched categories as the initial value
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  })();
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
export const fetchSingle = (async ( category:string, slug:string ): Promise<{ data: Posts[] } | string> => {
  const formattedCategory = category ? category.toLowerCase() : '';
  try {
    const data = await sanityClient.fetch(getSinglePost(formattedCategory, slug)) as Posts[];
    return { data };
  } catch (error) {
    return 'Error fetching';
  }
});
