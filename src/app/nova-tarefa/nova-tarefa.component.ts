import { Component } from '@angular/core';
import { DatabaseServiceService } from '../services/database-service.service';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent {
  tarefa = "";

  constructor(
    private db:DatabaseServiceService
  ){}


  novaTarefa(){
    if(this.tarefa != ""){
      let novaTarefa: Tarefa = {
        id: null,
        tarefa: this.tarefa,
        concluido: false
      }
      this.db.novaTarefa(novaTarefa).subscribe(res=>{
        alert(`${res.tarefa} criada com sucesso!`)
      })
    } else{
      alert("Digite uma tarefa.")
    }
  }
}
