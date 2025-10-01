import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Declaramos adminlte global, porque lo cargas desde angular.json
declare var adminlte: any;

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Una vez inicializada la app, reconfiguramos AdminLTE
    if (adminlte && adminlte.Accessibility) {
      new adminlte.Accessibility({
        skipLinks: false,          // 🚫 Desactiva "Skip to navigation"
        // announcements: false,      // Opcional: quita live regions
        // focusManagement: false,    // Opcional: quita manejo de Tab
        // keyboardNavigation: false, // Opcional: quita accesibilidad de menú
      });
    }
  })
  .catch((err) => console.error(err));
