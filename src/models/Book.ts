import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  private author: Author;

  constructor(bookTitle: string, bookYear: number, author: Author) {
    super(bookTitle, bookYear);
    this.author = author;
    author.addBook(this);
  }

  getAuthor(): Author {
    return this.author;
  }

  getDescription(): string {
    return `Book: ${this.bookTitle}, Year: ${
      this.bookYear
    }, Author: ${this.author.getName()}`;
  }
}
