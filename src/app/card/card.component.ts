import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
    public share : boolean;
    public link: boolean;
    public userId: String;
    public sub: any;
    
constructor(private route: ActivatedRoute, private cookie : CookieService, private router: Router) {}
    ngOnInit(){
        this.share = false;
        this.link = false;
        this.sub = this.route.params.subscribe(params => {
            this.userId = params['id']; 
     console.log(this.userId)
         });
         if(this.cookie.get('uid')==this.userId){
             this.router.navigate(['view']);
         }
         
}
    
public shareMessage(){
    this.share = true;
}

public generateLink(){
    this.link=true;
    this.cookie.set('uid',"venky123")
}
  }
