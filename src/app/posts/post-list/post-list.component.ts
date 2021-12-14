import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from"../../services/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts:Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
