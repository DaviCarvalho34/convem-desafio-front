import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-convem',
  templateUrl: './convem.component.html',
  styleUrls: ['./convem.component.css'],
})
export class ConvemComponent {
  respostaForm: FormGroup;
  mensagem: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder, private apiService: ApiService) {
    this.respostaForm = this.fb.group({
      resposta: ''
    });
  }

  ngOnInit() {
    // Coloque a chamada do método enviarResposta aqui se necessário
  }

  enviarResposta() {
    const respostaFormatada = this.respostaForm.value.resposta.toLowerCase();
    const apiUrl = 'http://localhost:3000/verificar-resposta';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const requestBody = {
      resposta: respostaFormatada
    };

    this.http.post<any>(apiUrl, requestBody, httpOptions)
      .subscribe(
        response => {
          if (response.message === 'sucesso') {
            this.mensagem = 'Você está mais próximo de se juntar ao time!';
          } else {
            this.mensagem = 'Erro';
          }
        },
        error => {
          console.error(error);
          this.mensagem = 'Erro ao se comunicar com o servidor';
        }
      );
  }
}
