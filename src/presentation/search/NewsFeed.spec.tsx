import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { HttpService } from "../../application/http.service";

import { NewsFeed } from "./NewsFeed";
import { Post } from "../../application/post.interface";
import { ENDPOINT_POSTS } from "../../libs/constants/endpoints.const";
import { renderWithRouter } from "../../__testing__/testing.util";
import { wait } from "@testing-library/user-event/dist/types/utils";

function validMockSearch(queryParam: string): Promise<Post[]> {
  return HttpService.get(ENDPOINT_POSTS, new URLSearchParams(queryParam))
    .then((res: any) => res.data as Post[]);
}

describe('News Feed', () => {
  describe('When making a valid search request', () => {
    it('will render a list of related posts', async () => {
      renderWithRouter(<NewsFeed generalSearch={() => validMockSearch("?q=posts")}/>);

      expect(screen.getByText("News Feed")).toBeInTheDocument();

      const postText = await waitFor(() => screen.getByText('qui est esse'));
      expect(postText).toBeInTheDocument();
    });
  });

  describe('When making an invalid search request', () => {
    it('will render an error message', async () => {
      renderWithRouter(<NewsFeed generalSearch={() => validMockSearch("?q=no_results")}/>);

      expect(screen.getByText("News Feed")).toBeInTheDocument();

      const errorText = await waitFor(() => screen.getByText('No results'));
      expect(errorText).toBeInTheDocument();
    })
  })
});