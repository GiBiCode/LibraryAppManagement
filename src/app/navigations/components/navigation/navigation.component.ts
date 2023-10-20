import { Component, Input } from '@angular/core';
import { Book } from 'src/app/books';
import { ModalComponent } from 'src/app/books-module/components/modal/modal.component';
import { BookDetailsComponent } from 'src/app/books-module/components/book-details/book-details.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  //Funcionalidad de la variable submenuOpen para que se despliegue al dar click.
  // submenuOpen: { [key: string]: boolean } = {};
  // dialog: any;

  // toggleSubmenu(key: string) {
  //   this.submenuOpen[key] = !this.submenuOpen[key];
  // }
  // @Input()
  // book!: Book;

  public active : boolean = false 

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }
}
