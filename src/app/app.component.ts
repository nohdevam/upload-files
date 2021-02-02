import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-file-upload';

  uploadFile(evt) {
    // evt est un tableau des fichier(s) déposés sur notre div. Ici nous supposerons qu'il y a un seul fichier uploadé

    let payload = new FormData();
    payload.append('data', evt[0]);
    // Nous pouvons maintenant uploader le fichier en lancant une requete POST avec la variable payload comme corps de requete :)
  }
}
