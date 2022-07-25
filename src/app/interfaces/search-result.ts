import { Author } from "./author";
import { Product } from "./product";

export interface SearchResult {
    author: Author;
    categories: [],
    items: Product[]
}