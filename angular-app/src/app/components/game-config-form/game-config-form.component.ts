import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { GameConfigService } from '../../services/game-config.service';
import { ToastService } from '../../services/toast.service';
import { GameConfig } from '../../models/game-config.model';

@Component({
  selector: 'app-game-config-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatButtonModule],
  templateUrl: './game-config-form.component.html',
  styleUrls: ['./game-config-form.component.scss']
})
export class GameConfigFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: GameConfigService,
    private toast: ToastService,
    public dialogRef: MatDialogRef<GameConfigFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameConfig
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.data.name, [Validators.required, Validators.minLength(3)]],
      description: [this.data.description || ''],
      odds: [this.data.odds, [Validators.required, Validators.min(0.1), Validators.max(100)]],
      status: [this.data.status, [Validators.required, Validators.pattern('^(active|inactive)$')]]
    });
  }

  getError(field: string): string {
    const formControl = this.form.get(field);
    if (!formControl || !formControl.errors) return '';
    if (!(formControl.touched || formControl.dirty)) return '';

    const errors = formControl.errors;

    const messages: Record<string, string> = {
      required: 'This field is required',
      minlength: `Minimum length is ${errors['minlength']?.requiredLength}`,
      maxlength: `Maximum length is ${errors['maxlength']?.requiredLength}`,
      min: `Minimum allowed value is ${errors['min']?.min}`,
      max: `Maximum allowed value is ${errors['max']?.max}`,
      email: 'Invalid email format',
      pattern: 'Invalid format'
    };

    const firstError = Object.keys(errors)[0];
    return messages[firstError] || 'Invalid field';
  }

  save() {
    if (!this.form.invalid) {
      const config: GameConfig = { id: this.data.id, ...this.form.value };
      this.service.updateConfig(config);
      this.toast.show('Updated', 'success');
      this.dialogRef.close(config);
    }
  }
}
