import { Observer } from "./observer.js";

export class PanelDevice implements Observer {
  update(event: string, data: any): void {
    if (event === "temperatureChange") {
      console.log(`🖥️ [Panel] Mostrando temperatura: ${data.temperature}°C`);
    } else if (event === "stormAlert") {
      console.log(`🖥️ [Panel] ⚠️ Alerta climática: ${data.message}`);
    }
  }
}
