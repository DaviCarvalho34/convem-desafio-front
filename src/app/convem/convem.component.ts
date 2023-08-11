import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Certifique-se de que o FormGroup também está sendo importado
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-convem',
  templateUrl: './convem.component.html',
  styleUrls: ['./convem.component.css'],
})
export class ConvemComponent {
  respostaForm: FormGroup;
  resposta: string = '';
  mensagem: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder, private apiService: ApiService) {
    this.respostaForm = this.fb.group({
      resposta: ''
    });
  }

  enviarResposta() {
    const respostaFormatada = this.respostaForm.value.resposta.toLowerCase();
    this.http.get(`http://localhost:3000/verificar-resposta/${respostaFormatada}`, { responseType: 'text' })
      .subscribe(
        response => {
          if (response === 'sucesso') {
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
