import { describe, expect, test, vi } from "vitest";
import { EmailService, ShortMessageService, Notifier } from "../src/ejercicio-5"; // Ajusta la importación según la ubicación del código

// Pruebas para la clase EmailService
describe("EmailService", () => {
  test("debe enviar una notificación por correo electrónico", () => {
    const emailService = new EmailService();
    const consoleSpy = vi.spyOn(console, "log");
    
    emailService.notify("Hello, world!");
    
    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by email: Hello, world!");
    
    consoleSpy.mockRestore();
  });
});

// Pruebas para la clase ShortMessageService
describe("ShortMessageService", () => {
  test("debe enviar una notificación por SMS", () => {
    const smsService = new ShortMessageService();
    const consoleSpy = vi.spyOn(console, "log");

    smsService.notify("Hello, world!");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by SMS: Hello, world!");

    consoleSpy.mockRestore();
  });
});

// Pruebas para la clase Notifier
describe("Notifier", () => {
  test("debe enviar una notificación utilizando EmailService", () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);
    const consoleSpy = vi.spyOn(console, "log");

    notifier.sendNotification("Hello, world!");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by email: Hello, world!");

    consoleSpy.mockRestore();
  });

  test("debe enviar una notificación utilizando ShortMessageService", () => {
    const smsService = new ShortMessageService();
    const notifier = new Notifier(smsService);
    const consoleSpy = vi.spyOn(console, "log");

    notifier.sendNotification("Hello, world!");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by SMS: Hello, world!");

    consoleSpy.mockRestore();
  });
});

