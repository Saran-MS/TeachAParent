import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatSnackBar , MatSnackBarModule } from '@angular/material';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  user = [];

  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase, private formBuilder: FormBuilder, private snackBar: MatSnackBar ) {
    this.items = db.list('items').valueChanges();
}




  ngOnInit() {

  }









  onSubmit() {

    this.db.list('items').push({ users: this.user,
    });
  this.snackBar.open('Registered successfully', ' ', { duration: 3000 , verticalPosition: 'bottom' }
  );





}
}

