import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-procesandopago',
  templateUrl: './procesandopago.component.html',
  styleUrls: ['./procesandopago.component.css'],
})
export class ProcesandopagoComponent implements AfterViewInit {
  @ViewChild('webpayForm', { static: false }) webpayForm!: ElementRef;
  token: string = '';
  urlWebpay: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    this.goToWebpay();
  }

  //realizar submit del formulario automaticamente de webpay

  goToWebpay() {
    if (!this.token) {
      this.route.queryParams.subscribe((params) => {
        this.token = params['token'] || '';
        this.urlWebpay = params['url'] || '';
      });
    }
    this.webpayForm.nativeElement.token_ws.value = this.token;
    this.webpayForm.nativeElement.action = this.urlWebpay;
    this.webpayForm.nativeElement.submit();

  }
}
