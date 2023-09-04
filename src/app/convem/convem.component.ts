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
  responseForm: FormGroup;
  message: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder, private apiService: ApiService) {
    this.responseForm = this.fb.group({
      response: ''
    });
  }

  sendResponse() {
    const formatedResponse = this.responseForm.value.response.toLowerCase();
    const apiUrl = 'http://localhost:3000/verificar-resposta';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const requestBody = {
      response: formatedResponse
    };

    this.http.post<any>(apiUrl, requestBody, httpOptions)
      .subscribe(
        response => {
          if (response.message === 'sucesso') {
            this.message = 'Você está mais próximo de se juntar ao time!';
          } else {
            this.message = 'Erro';
          }
        },
        error => {
          console.error(error);
          this.message = 'Erro ao se comunicar com o servidor';
        }
      );
  }
}
