import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  view: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.view = this.route.snapshot.params['view'];
    if ( !this.view ){
      this.view = 'message'
    }
  }

  defineClass( view) {
    if (this.view === view )
     { return "active"}
    else if (this.view === view)
      {return "active";}
    else if (this.view === view )
      {return "active";}
    else
     { return "inactive";}

  }

  onNextView(view) {
    this.router.navigateByUrl('/control', { skipLocationChange: true }).then(() => {     
      this.router.navigate(['control',  view]);
    });
  }

}
