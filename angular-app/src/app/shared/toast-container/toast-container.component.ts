import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div *ngFor="let toast of toastService.toasts$ | async" 
           class="toast" 
           [ngClass]="toast.type">
        <span class="message">{{ toast.message }}</span>
        <button mat-icon-button class="close" (click)="toastService.removeToast(toast.id)">
          ×
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) { }
}
