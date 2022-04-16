import { DefaultRequestBody, PathParams, rest } from 'msw';
import { Post } from '../../application/post.interface';
import { ENDPOINT_POSTS } from '../../libs/constants/endpoints.const';
const GET_POSTS_MOCK = require("./data/posts.json") as Post[];


export const handlers = [
  // GET POSTS
  rest.get<DefaultRequestBody, PathParams, Post[]>(ENDPOINT_POSTS, (req, res, context) => {
    const searchQuery = req.url.searchParams.get('q');

    if (searchQuery?.toLowerCase() === "posts") {
      return res(
        //context.delay(50),
        context.status(200),
        context.json(GET_POSTS_MOCK),
      );
    } else {
      return res(
        context.delay(1000),
        context.status(404)
      )
    }
  })
];