import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  HostBindingDecorator,
} from '@angular/core';

@Directive({
  selector: '[appUpload]',
})
export class UploadDirective {
  @Output() onFileDropped = new EventEmitter<any>();
  @HostBinding('style.background-color') public background = 'fff';
  @HostBinding('style.opacity') public opacity = '1';

  //Dragover, l'utilisateur glisse quelque chose sur notre élément Host
  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }
  //Dragleave, l'utilisateur glisse quelque chose hors de notre élément Host
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'fff';
    this.opacity = '1';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#FBD9D7';
    this.opacity = '1';
    let files = evt.dataTransfert.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  constructor() {}
}
