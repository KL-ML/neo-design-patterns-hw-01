import { AbstractBook } from "./AbstractBook";

export class Author {
  private authorName: string;
  private books: AbstractBook[] = [];

  constructor(authorName: string) {
    this.authorName = authorName;
  }

  getName(): string {
    return this.authorName;
  }

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  getBooks(): AbstractBook[] {
    return [...this.books];
  }
}
