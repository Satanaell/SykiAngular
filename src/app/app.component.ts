import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SykiAngular';

  posts:any;
  
  constructor(private service: WeatherService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          console.log(response);
          this.posts = response;
        });
  }


}
