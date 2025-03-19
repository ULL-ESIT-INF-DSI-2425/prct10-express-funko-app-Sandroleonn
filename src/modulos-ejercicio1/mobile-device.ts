import { Observer } from "./observer.js";

export class MobileDevice implements Observer {
  update(event: string, data: any): void {
    if (event === "temperatureChange") {
      console.log(`📲 [Móvil] Nueva temperatura: ${data.temperature}°C`);
    } else if (event === "stormAlert") {
      console.log(`📲 [Móvil] ⚠️ Alerta: ${data.message}`);
    }
  }
}
