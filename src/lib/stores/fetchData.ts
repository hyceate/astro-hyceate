import { client } from "@lib/utils/client";
import { categoryQuery, getSinglePost } from '@lib/utils/queries';
import { readable } from "svelte/store";

interface NavLinks {
  _id: string;
  title: string;  
  description: string;
  slug: string;
}

async function getData() {
  const response = await client.fetch(categoryQuery);
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

interface Posts{
    [key: string]: string,
  }
export const fetchList = (async ( params:string ) => {
	const categoryQuery = params;
	const posts = (await client.fetch(getPosts(categoryQuery))) as Posts[];
	if (posts){
		return {
			posts,
			categoryQuery
		} 
	}
	
});
export const fetchSingle = (async ( category:string, slug:string ) => {
  const formattedCategory = category ? category.toLowerCase() : '';
	const data = (await client.fetch(getSinglePost(formattedCategory, slug))) as Posts[];
	const po = data;
	if (po){
		return {
			po,
		} 
	}
  else
  return ('Error fetching');
});
