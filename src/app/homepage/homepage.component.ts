import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {dataSample} from '../datasample/data.sample'

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export default class HomepageComponent {
  posts = dataSample
}
