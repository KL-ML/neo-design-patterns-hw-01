export abstract class AbstractBook {
  protected bookTitle: string;
  protected bookYear: number;
  
  constructor(bookTitle: string, bookYear: number) {
    this.bookTitle = bookTitle;
    this.bookYear = bookYear;
  }
  
  getTitle(): string {
    return this.bookTitle;
  }
  
  getYear(): number {
    return this.bookYear;
  }
  
  abstract getDescription(): string;
}
