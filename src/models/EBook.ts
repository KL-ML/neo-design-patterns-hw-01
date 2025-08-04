import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  private author: Author;
  private url: string;

  constructor(bookTitle: string, bookYear: number, author: Author, url: string) {
    super(bookTitle, bookYear);
    this.author = author;
    this.url = url;
    author.addBook(this);
  }

  getAuthor(): Author {
    return this.author;
  }

  getUrl(): string {
    return this.url;
  }

  getDescription(): string {
    return `EBook: ${this.bookTitle}, Year: ${
      this.bookYear
    }, Author: ${this.author.getName()}, URL: ${this.url}`;
  }
}
