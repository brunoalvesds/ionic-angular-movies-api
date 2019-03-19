import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmesPage {

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, public movieProvider: MovieProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmesPage');
    this.movieProvider.getPopularMovies().subscribe(
      data => {
      const response = (data as any);
      const objeto_retorno = response.results;
      this.lista_filmes = objeto_retorno;
      console.log(this.lista_filmes);
      }, error => {
      console.log(error);
      }
    )
  }

}
