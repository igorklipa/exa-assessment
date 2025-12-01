import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ToastTypes = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastTypes;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[] = [];
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  show(message: string, type: ToastTypes = 'info') {
    const id = Date.now().toString();
    const t: Toast = { id, message, type };
    this.toasts = [...this.toasts, t];
    this.toastsSubject.next(this.toasts);

    setTimeout(() => {
      this.removeToast(id);
    }, 3000);
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.toastsSubject.next(this.toasts);
  }
}
