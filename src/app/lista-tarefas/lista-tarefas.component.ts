import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../services/database-service.service';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit{
  tarefas:Tarefa[] = []
  displayedColumns: string[] = ['id', 'tarefa', 'status'];

  constructor(
    private db:DatabaseServiceService
  ){}
  ngOnInit(): void {
    this.db.getAllTarefas().subscribe(res=>{
      this.tarefas = res;
      console.table(res);
    })
  }

  


}
