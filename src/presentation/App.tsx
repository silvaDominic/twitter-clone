import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./home/HomePage";
import {NewsFeed} from "./search/NewsFeed";
import React from "react";
import {HttpService} from "../application/http.service";
import {AxiosResponse} from "axios";

export function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage generalSearch={fakeSearch}/>}/>
                    <Route path="/search" element={<NewsFeed/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );

    function fakeSearch() {
        return HttpService.get<AxiosResponse>("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.data);
    }
}