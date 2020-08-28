import { Component, OnInit } from '@angular/core';
import { Info } from '../../shared/models/info.model';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../providers/service.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  info: Info;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.info = new Info();
  }

  onSubmit(formulario: NgForm){
     if (formulario.invalid) {return; }
     this.service.sendEmail(formulario.value).subscribe(
       response => {
         console.log(response);
     });
  }
}
