import { Component, OnInit } from '@angular/core';
import { KeyProviderService } from '../key-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list
  i
  constructor(private keyprovider:KeyProviderService, private rourter:Router) { 

    this.keyprovider.getNames().subscribe((data) =>{
      this.list=data

    length = this.list.length
    

      console.log(data)
  })

  }

  ngOnInit() {
  }

}
