// queries
export const categoryQuery = `*[_type == "category"]{
  _id, title, description,
  "slug":slug.current,
}`;

export const getPosts = (query:string) => {
  return `*[_type == "${query}"] {
    _id,
    coverImage,
    mainImage,
    title,
    youtubeEmbed,
    "slug": slug.current,
    "category": categories[]->{title},
  }`;
}
export const getSinglePost = (query:string, slug:string) => {
  return `*[_type == "${query}" && slug.current == "${slug}"] {
    ...,
    "slug": slug.current,
    "category": categories[]->{title},
  }`;
}