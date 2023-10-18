import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})

export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "296071a64ded3389152a3a257a9be6c3";

  //bannerapidata
  bannerApiData():Observable<any>{
    return this.http.get(this.baseurl+'/trending/all/day?api_key='+this.apikey);
    }

  //trending movie api data
  trendingMovieApiData(): Observable<any>{
    return this.http.get(this.baseurl+'/trending/movie/day?api_key='+this.apikey);
  }

  //search movie
  getSearchMovie(data:any):Observable<any>{
    console.log(data,'movie#')
    return this.http.get(this.baseurl+'/search/movie?query='+data.movieName+'&api_key='+this.apikey);
  }

  //movie details
  getMovieDetails(data:any):Observable<any>{
    return this.http.get(this.baseurl+'/movie/'+data+'?api_key='+this.apikey);
  }

  //movie video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(this.baseurl+'/movie/'+data+'/videos?api_key='+this.apikey)
  }
 
  //movie cast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(this.baseurl+'/movie/'+data+'/credits?api_key='+this.apikey)
  }

  //action
  fetchActionMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+28);
  }
  //adventure
  fetchAdventureMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+12);
  }
  //animation
  fetchAnimationMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+16);
  }
  //comedy
  fetchComedyMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+35);
  }
  //documentary
  fetchDocumentaryMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+99);
  }
  //science
  fetchScienceMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+878);
  }
  //thriller
  fetchThrillerMovies():Observable<any> {
    return this.http.get(this.baseurl+'/discover/movie/?api_key='+this.apikey+'&with_genres='+53);
  }
}



