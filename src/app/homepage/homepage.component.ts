import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import {dataSample} from '../datasample/data.sample'

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export default class HomepageComponent {
  posts = dataSample
  filteredPosts = this.posts
  @Input() category = "";

  changeCategory(cat:string){
    this.category = cat
    console.log(this.category)
    console.log(this.filteredPosts)
    this.filteredPosts = this.posts.filter((post) => post.category.match(this.category))
  }

  allCategory(){
    this.filteredPosts = this.posts
  }
}
