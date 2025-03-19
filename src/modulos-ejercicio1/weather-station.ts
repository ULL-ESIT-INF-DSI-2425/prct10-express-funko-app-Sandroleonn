import { Subject, Observer } from "./observer.js";

export class WeatherStation implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(event: string, data: any): void {
    this.observers.forEach(observer => observer.update(event, data));
  }

  setTemperature(temp: number): void {
    console.log(`🌡️ Nueva temperatura registrada: ${temp}°C`);
    this.notify("temperatureChange", { temperature: temp });
  }

  setStormAlert(): void {
    console.log(`⛈️ ¡Alerta de tormenta detectada!`);
    this.notify("stormAlert", { message: "Se acerca una tormenta." });
  }
}
