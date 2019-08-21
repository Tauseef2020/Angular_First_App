import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

userid: number;
userdata: any;
list: FormGroup;

  constructor(private fb: FormBuilder, private _service: TodoService, private route: Router, private navUrl: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.fb.group({
      id: [new Date().getTime()],
      firstname: [''],
      lastname: ['']
    });

    this.navUrl.paramMap.subscribe((item: any) => {
      this.userid = +item.params.id;

      if (this.userid !== 0)
      {
        const value = this._service.findId(this.userid);
        this.onload(value);
      }
    })
  }

  onsubmit()
  {
    if (this.userid === 0)
    {
      this._service.add(this.list.value);
      this.route.navigate(['store']);
    }
    else
    {
     this._service.edit(this.list.value);
    }
  }

  onload (value)
  {
    this.list.patchValue({
      ...value
    });
  }

}
