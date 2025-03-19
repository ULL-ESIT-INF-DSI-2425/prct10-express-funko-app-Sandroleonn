import { describe, expect, test, vi } from "vitest";
import { WeatherStation } from "../src/modulos-ejercicio1/weather-station.js";
import { MobileDevice } from "../src/modulos-ejercicio1/mobile-device.js";
import { PanelDevice } from "../src/modulos-ejercicio1/panel-device.js";

describe("WeatherStation", () => {
  test("debe permitir suscribir observadores", () => {
    const station = new WeatherStation();
    const mobile = new MobileDevice();

    station.subscribe(mobile);
    
    const spy = vi.spyOn(mobile, "update");
    station.setTemperature(30);
    
    expect(spy).toHaveBeenCalledWith("temperatureChange", { temperature: 30 });
  });

  test("debe permitir desuscribir observadores", () => {
    const station = new WeatherStation();
    const panel = new PanelDevice();

    station.subscribe(panel);
    station.unsubscribe(panel);
    
    const spy = vi.spyOn(panel, "update");
    station.setTemperature(25);
    
    expect(spy).not.toHaveBeenCalled();
  });

  test("debe notificar a todos los observadores", () => {
    const station = new WeatherStation();
    const mobile = new MobileDevice();
    const panel = new PanelDevice();

    station.subscribe(mobile);
    station.subscribe(panel);

    const spyMobile = vi.spyOn(mobile, "update");
    const spyPanel = vi.spyOn(panel, "update");

    station.setStormAlert();

    expect(spyMobile).toHaveBeenCalledWith("stormAlert", { message: "Se acerca una tormenta." });
    expect(spyPanel).toHaveBeenCalledWith("stormAlert", { message: "Se acerca una tormenta." });
  });

  test("debe registrar y notificar cambio de temperatura", () => {
    const station = new WeatherStation();
    const mobile = new MobileDevice();

    station.subscribe(mobile);

    const spy = vi.spyOn(mobile, "update");

    station.setTemperature(18);
    
    expect(spy).toHaveBeenCalledWith("temperatureChange", { temperature: 18 });
  });
});

// 🔹 PRUEBA PARA CUBRIR LA LÍNEA 6 DE `PanelDevice`
describe("PanelDevice", () => {
  test("debe mostrar la temperatura cuando recibe un evento de cambio de temperatura", () => {
    const panel = new PanelDevice();
    const consoleSpy = vi.spyOn(console, "log");

    panel.update("temperatureChange", { temperature: 22 });

    expect(consoleSpy).toHaveBeenCalledWith("🖥️ [Panel] Mostrando temperatura: 22°C");
  });

  test("debe mostrar la alerta climática cuando recibe un evento de tormenta", () => {
    const panel = new PanelDevice();
    const consoleSpy = vi.spyOn(console, "log");

    panel.update("stormAlert", { message: "Se acerca una tormenta." });

    expect(consoleSpy).toHaveBeenCalledWith("🖥️ [Panel] ⚠️ Alerta climática: Se acerca una tormenta.");
  });
});
