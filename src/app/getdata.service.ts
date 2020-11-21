import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {
  constructor(public http: Http) {
  }

  search(v: string) {
    return this.http
      .get(
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0A' +
        'SELECT DISTINCT ?c ?age ?nom ' +
        'WHERE {  {?c obo:nom ?nom} ' +
        '{?c obo:age ?age} ' +
        '{?c ?subClassOf obo:Goalkeeper .} ' +
        'UNION {?c ?subClassOf obo:Defender .} ' +
        'UNION {?c ?subClassOf obo:Striker .} ' +
        'UNION {?c ?subClassOf obo:Midfielder .}' +
        'FILTER regex (lcase(?nom) , "^(' + v + ')")' +
        '}&output=json'
      )
      .map((res) => res.json());
  }

  getallAuthorsr() {
    return this.http
      .get(
        'http://localhost:3030/library?query='
         + 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fgazzah%2Fontologies%2F2020%2F10%2Funtitled-ontology-4%23%3E%0D%0A%0D%0A'
         + 'SELECT  ?book_title ?author_name ?hasPrice '
         + 'WHERE {' +
        '  {?book ns:book_title ?book_title}' +
        '  {?book ns:ecritPar ?author}' +
        '    {?book ns:hasPrice ?hasPrice}' +
        ' {?author ns:author_name ?author_name}'
         + '}&output=json'
      )
      .map((res) => res.json());
  }
  getAuthors() {
    return this.http
      .get(
        'http://localhost:3030/library?query='
        + 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fgazzah%2Fontologies%2F2020%2F10%2Funtitled-ontology-4%23%3E%0D%0A%0D%0A'
        + 'SELECT  ?author_name  '
        + 'WHERE {' +
        ' {?author ns:author_name ?author_name}'
        + '}&output=json'
      )
      .map((res) => res.json());
  }
  getallAuthorsByCate(event) {
    return this.http
      .get(
        'http://localhost:3030/library?query='
        + 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fgazzah%2Fontologies%2F2020%2F10%2Funtitled-ontology-4%23%3E%0D%0A%0D%0A'
        + 'SELECT  ?book_title ?author_name ?hasPrice ?book '
        + 'WHERE {' +
        '  {?book ns:book_title ?book_title}' +
        '  {?book ns:ecritPar ?author}' +
        '    {?book ns:hasPrice ?hasPrice}' +
        ' {?author ns:author_name ?author_name}' +
        ' ?book rdf:type ns:' + event
        + '}&output=json'
      )
      .map((res) => res.json());
  }
  booksearch(v: string) {
    return this.http
      .get(
        'http://localhost:3030/library?query='
        + 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fgazzah%2Fontologies%2F2020%2F10%2Funtitled-ontology-4%23%3E%0D%0A%0D%0A' +
    'SELECT ?book_title ?author_name ?hasPrice ' +
        'WHERE {  ' +
        '{?book ns:book_title ?book_title} ' +
        '{?book ns:ecritPar ?author} ' +
        '{?book ns:hasPrice ?hasPrice}' +
        '{?author ns:author_name ?author_name.} ' +
        'FILTER (regex (lcase(?author_name) , "' + v.toLowerCase() + '")' +
        ' || regex (lcase(?book_title) , "' + v.toLowerCase() + '"))' +
        '}&output=json'
      )
      .map((res) => res.json());
  }
  bookByAuthor(v: string) {
    return this.http
      .get(
        'http://localhost:3030/library?query='
        + 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fgazzah%2Fontologies%2F2020%2F10%2Funtitled-ontology-4%23%3E%0D%0A%0D%0A' +
        'SELECT ?book_title ?author_name ?hasPrice ' +
        'WHERE {  ' +
        '{?book ns:book_title ?book_title} ' +
        '{?book ns:ecritPar ?author} ' +
        '{?book ns:hasPrice ?hasPrice}' +
        '{?author ns:author_name ?author_name.} ' +
        'FILTER regex (lcase(?author_name) , "' + v.toLowerCase() + '")' +
        '}&output=json'
      )
      .map((res) => res.json());
  }
  bookByPrice(min, max) {
    return this.http
      .get(
        'http://localhost:3030/library?query='
        + 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A ' +
        'PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fgazzah%2Fontologies%2F2020%2F10%2Funtitled-ontology-4%23%3E%0D%0A%0D%0A' +
        'SELECT ?book_title ?author_name ?hasPrice ' +
        'WHERE {  ' +
        '{?book ns:book_title ?book_title} ' +
        '{?book ns:ecritPar ?author} ' +
        '{?book ns:hasPrice ?hasPrice} ' +
        '{?author ns:author_name ?author_name.} ' +
        ' FILTER (?hasPrice >= ' + min + ' %26%26 ?hasPrice <= ' + max + ')' +
        '}&output=json'
      )
      .map((res) => res.json());
  }

}
