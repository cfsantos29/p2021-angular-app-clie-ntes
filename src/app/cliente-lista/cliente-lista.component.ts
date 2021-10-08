import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  clientes = [
    {
      nome: 'Ana',
      fone: '12345678',
      email: 'ana@email.com.br',
    },
    {
      nome: 'Gil',
      fone: '87654321',
      email: 'gil@email.com.br'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
