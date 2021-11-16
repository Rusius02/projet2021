import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: FormGroup = this.fb.group({


  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  autoComplete() {

  }
}
