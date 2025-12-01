import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { GameConfigService } from '../../services/game-config.service';
import { ToastService } from '../../services/toast.service';
import { GameConfig } from '../../models/game-config.model';
import { GameConfigFormComponent } from '../game-config-form/game-config-form.component';

@Component({
  selector: 'app-game-config-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './game-config-list.component.html',
  styleUrl: './game-config-list.component.scss'
})
export class GameConfigListComponent implements OnInit {
  configs$!: Observable<GameConfig[]>;
  displayedColumns = ['id', 'name', 'description', 'odds', 'status', 'actions'];

  constructor(
    private service: GameConfigService,
    private toast: ToastService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.configs$ = this.service.getConfigs();
  }

  openForm(config: GameConfig) {
    const latest = this.service.getConfigById(config.id as number);
    if (!latest) {
      this.toast.show('Configuration not found', 'error');
      return;
    } else {
      this.dialog.open(GameConfigFormComponent, { width: '600px', data: latest });
    }
  }

  deleteConfig(id: number | undefined) {
    if (id) {
      if (confirm('Delete this config?')) {
        this.service.deleteConfig(id);
        this.toast.show('Deleted', 'success');
      }
    }
  }
}
