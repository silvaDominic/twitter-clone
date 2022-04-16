import { Post } from "../../application/post.interface";
import { HttpService } from "../../application/http.service";
import { ENDPOINT_POSTS } from "../../libs/constants/endpoints.const";
const GET_POSTS_MOCK = require("../../__testing__/mocks/data/posts.json") as Post[];

function validMockSearch(queryParam: string): Promise<Post[]> {
  return HttpService.get(ENDPOINT_POSTS, new URLSearchParams(queryParam))
    .then((res: any) => res.data as Post[]);
}

describe('Twitter API', () => {
  describe('When a valid search request is made', () => {
    it('successfully returns a list of Posts', async () => {
      const res = await validMockSearch("?q=posts");
      expect(res).toEqual(GET_POSTS_MOCK);
    });
  });
});
