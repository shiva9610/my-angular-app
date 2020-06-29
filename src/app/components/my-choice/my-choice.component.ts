import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChoicesService } from 'src/app/services/choices.service';

@Component({
  selector: 'app-my-choice',
  templateUrl: './my-choice.component.html',
  styleUrls: ['./my-choice.component.css']
})
export class MyChoiceComponent implements OnInit {

  timer = 0;
  choicesList = [];
  choicesForm = this.fb.group({
    name : ['', Validators.required],
    votes : [0]
  })

  constructor(
    private fb : FormBuilder,
    private ch : ChoicesService
  ) { }

  ngOnInit() {

    setInterval(()=>{
      this.timer++;
    }, 1000);

    this.ch.choices.subscribe(
      data => {
        this.choicesList = data;
        console.log(this.choicesList);
        
      }
    );
 
  }

  submitForm(){
    this.ch.addChoice(this.choicesForm.value);
    this.choicesForm.get('name').reset();
    
  }

  upVote(choice){
    this.ch.addVote(choice);
  }


}
