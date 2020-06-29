import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Choice {
  id : number,
  name : string,
  vote : number
}

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {
  //outgoing
  private choicesCollection : AngularFirestoreCollection<any>

  //incoming
  public choices : Observable<Choice[]>;

  constructor( 
    private fs : AngularFirestore
    ) {
      this.choicesCollection = fs.collection<Choice>('choices', ref => ref.orderBy('votes', "desc"))
      this.choices = this.choicesCollection.valueChanges({idField : 'id'});
     }

  addChoice(choice){

    this.choicesCollection.add(choice);

  }

  addVote(choice){
    let choiceDoc = this.fs.doc<any>(`choices/${choice.id}`);
    choiceDoc.update({votes : choice.votes +1})
  }
}
