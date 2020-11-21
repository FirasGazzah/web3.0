import { Component, OnInit } from '@angular/core';
import {Books} from '../Models/Player';
import {GetdataService} from '../getdata.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  search = '';
  allbooks: Books[] = [];
  allAuthors: Books[] = [];
  min = 0;
  max = 5000;
  public collapse = true;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  price = {
    minPrice: this.min,
    maxPrice: this.max
  };
  i = 1;


  constructor(public sparql: GetdataService) {
    this.getAllAuthors();
    this.sparql.getAuthors().subscribe((res) => {
      for (let i = 0; i < 10000; i++) {
        const nom = res.results.bindings[i].author_name.value;
        const book = '';
        const prix = '';
        this.allAuthors.push({name: nom, bool: book, price: prix });
      }
    });
  }

  ngOnInit() {
  }

  doSearch(ev) {
    this.allbooks.splice(0);
      this.sparql.booksearch(ev.target.value).subscribe((res) => {
        for (let i = 0; i < 10000; i++) {
          const nom = res.results.bindings[i].author_name.value;
          const book = res.results.bindings[i].book_title.value;
          const prix = res.results.bindings[i].hasPrice.value;
          this.allbooks.push({name: nom, bool: book, price: prix });
        }
      });
  }

  cat(ev) {
    this.allbooks.splice(0);
    if (ev.target.value) {
    console.log(ev.target.value);
      this.sparql.getallAuthorsByCate(ev.target.value).subscribe((res) => {
        for (let i = 0; i < 10000; i++) {
          const nom = res.results.bindings[i].author_name.value;
          const book = res.results.bindings[i].book_title.value;
          const prix = res.results.bindings[i].hasPrice.value;
          this.allbooks.push({name: nom, bool: book, price: prix });
        }
      });
    } else {
      this.getAllAuthors();

    }
  }
  byAuth(ev) {
    this.allbooks.splice(0);
    if (ev.target.value) {
      this.sparql.bookByAuthor(ev.target.value).subscribe((res) => {
        for (let i = 0; i < 10000; i++) {
          const nom = res.results.bindings[i].author_name.value;
          const book = res.results.bindings[i].book_title.value;
          const prix = res.results.bindings[i].hasPrice.value;
          this.allbooks.push({name: nom, bool: book, price: prix });
        }
      });
    } else {
    this.getAllAuthors();

    }
  }

  // Range Changed
  appliedFilter(event: any) {
    this.allbooks.splice(0);
    this.price = { minPrice: event.value, maxPrice: event.highValue };
    console.log(this.price.minPrice)
    this.sparql.bookByPrice(this.price.minPrice, this.price.maxPrice).subscribe((res) => {
      for (let i = 0; i < 10000; i++) {
        const nom = res.results.bindings[i].author_name.value;
        const book = res.results.bindings[i].book_title.value;
        const prix = res.results.bindings[i].hasPrice.value;
        this.allbooks.push({name: nom, bool: book, price: prix });
      }
    });
  }

  getAllAuthors() {
    this.sparql.getallAuthorsr().subscribe((res) => {
      for (let i = 0; i < 10000; i++) {
        const nom = res.results.bindings[i].author_name.value;
        const book = res.results.bindings[i].book_title.value;
        const prix = res.results.bindings[i].hasPrice.value;
        this.allbooks.push({name: nom, bool: book, price: prix });
      }
    });
  }
}
