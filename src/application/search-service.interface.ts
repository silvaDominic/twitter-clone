import { Post } from "./post.interface";

export interface ISearchService {
    generalSearch(query: string): Promise<Post[]>
}
