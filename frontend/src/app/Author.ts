import { last } from 'rxjs/operators';

export class Author {
  authorId?: number;
  firstName!: string;
  lastName!: string;
  bornYear?: number;
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
