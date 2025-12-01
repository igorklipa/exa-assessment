import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { GameConfigService } from './app/services/game-config.service';
import { ToastService } from './app/services/toast.service';

bootstrapApplication(AppComponent, { providers: [GameConfigService, ToastService] })
  .catch((err) => console.error(err));
