import { DefaultRequestBody, PathParams, rest } from 'msw';
import { Post } from "../application/post.interface";
import { ENDPOINT_POSTS } from "../constants/endpoints.const";
const GET_POSTS_MOCK = require("./data/posts.json") as Post[];


export const handlers = [
  // GET POSTS
  rest.get<DefaultRequestBody, PathParams, Post[]>(ENDPOINT_POSTS, (req, res, context) => {
    const searchQuery = req.url.searchParams.get('q');
    console.log("SEARCH Q", searchQuery);
    if (searchQuery === "posts") {
      return res(
        context.status(200),
        context.json(GET_POSTS_MOCK),
      );
    } else {
      return res(
        context.status(404)
      )
    }
  })
];