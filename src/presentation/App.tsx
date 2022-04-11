import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NewsFeed } from "./search/NewsFeed";
import { Post } from "../application/post.interface";
import { ChakraProvider } from "@chakra-ui/react";
import { HttpService } from "../application/http.service";
import { ENDPOINT_POSTS } from "../constants/endpoints.const";

export function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<NewsFeed generalSearch={dummySearch}/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );

  function dummySearch(queryParam: string): Promise<Post[]> {
    const params = new URLSearchParams(queryParam);
    return HttpService.get(ENDPOINT_POSTS, params)
      .then((res: any) => {
        return res.data as Post[];
      });
  }
}