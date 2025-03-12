/**
 * Interfaz que define un servicio de notificación genérico.
 * Cualquier servicio de notificación debe implementar este método.
 */
interface NotificationService {
    /**
     * Envía una notificación con el mensaje proporcionado.
     * 
     * @param message - El mensaje a enviar en la notificación.
     */
    notify(message: string): void;
}

/**
 * Representa un servicio de notificación por correo electrónico.
 * 
 * ```typescript
 * const emailService = new EmailService();
 * emailService.notify("Hello, world!"); // "Sending notification by email: Hello, world!"
 * ```
 */
export class EmailService implements NotificationService {
    /**
     * Envía una notificación por correo electrónico.
     * 
     * @param message - El mensaje a enviar.
     */
    notify(message: string): void {
        console.log(`Sending notification by email: ${message}`);
    }
}

/**
 * Representa un servicio de notificación por SMS.
 * 
 * ```typescript
 * const smsService = new ShortMessageService();
 * smsService.notify("Hello, world!"); // "Sending notification by SMS: Hello, world!"
 * ```
 */
export class ShortMessageService implements NotificationService {
    /**
     * Envía una notificación por SMS.
     * 
     * @param message - El mensaje a enviar.
     */
    notify(message: string): void {
        console.log(`Sending notification by SMS: ${message}`);
    }
}

/**
 * Representa un sistema de notificación que utiliza un servicio de notificación específico.
 * 
 * ```typescript
 * const notifier = new Notifier(new EmailService());
 * notifier.sendNotification("Hello, world!"); // "Sending notification by email: Hello, world!"
 * ```
 */
export class Notifier {
    /**
     * Crea una instancia de `Notifier` con un servicio de notificación específico.
     * 
     * @param notificationService - El servicio de notificación a utilizar.
     */
    constructor(private notificationService: NotificationService) {}

    /**
     * Envía una notificación utilizando el servicio configurado.
     * 
     * @param message - El mensaje a enviar.
     */
    sendNotification(message: string): void {
        this.notificationService.notify(message);
    }
}
