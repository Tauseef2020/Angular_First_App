import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  private list = new Array();
  constructor(private _service: TodoService, private route: Router) { }

  
  ngOnInit() {
    
     // Applying Dummy Api Calling Using Both Promise and Onbservable Method...//

    //  this._service.getApi().subscribe (function (data) {console.log(data);});
    //  const employe = this._service.getApi2().then ((item) => {this.list = item;});

    // *************************************************************************  //
     this.list = this._service.display();
  }

  new ()
  {
     this.route.navigate(['entry/0'])
  }

  delete (id: number)
  {
    this._service.remove(id);
  }

  edit (value: any)
  {
    this.route.navigate(['entry', value.id]);
  }

}
