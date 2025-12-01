import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameConfig } from '../models/game-config.model';

@Injectable({
  providedIn: 'root',
})
export class GameConfigService {
  private gameConfigs: GameConfig[] = [
    { id: 1, name: 'Football Match', odds: 1.5, status: 'active' },
    { id: 2, name: 'Basketball Game', odds: 2.0, status: 'inactive' },
  ];

  private configsSubject = new BehaviorSubject<GameConfig[]>(this.gameConfigs);

  constructor() {}

  getConfigs(): Observable<GameConfig[]> {
    return this.configsSubject.asObservable();
  }

  getConfigById(id: number): GameConfig | undefined {
    const game = this.gameConfigs.find(item => item.id === id);
    return game ? { ...game } : undefined;
  }

  addConfig(config: GameConfig) {
    config.id = new Date().getTime(); // unique id
    this.gameConfigs.push(config);
    this.configsSubject.next([...this.gameConfigs]);
  }

  updateConfig(updatedConfig: GameConfig) {
    const gameIndex = this.gameConfigs.findIndex(item => item.id === updatedConfig.id);
    if (gameIndex > -1) {
      this.gameConfigs[gameIndex] = updatedConfig;
      this.configsSubject.next([...this.gameConfigs]);
    }
  }

  deleteConfig(id: number) {
    this.gameConfigs = this.gameConfigs.filter(item => item.id !== id);
    this.configsSubject.next([...this.gameConfigs]);
  }
}
