type LogAction = [string, string, Date];

/**
 * Clase abstracta que implementa los métodos de las interfaces anteriores
 * 
 * @param instance - Atributo privado estático para hacer una instancia de logger
 * @param actions - Atributo privado que contiene una tupla con tres componentes: usuario, acción y fecha
 */
export class Logger {
  private static instance: Logger;
  private actions: LogAction[];

  constructor() {
    this.actions = [];
  }

  /**
   * Obtiene la instancia única de la clase Logger.
   * Si no existe una instancia, se crea una nueva.
   * 
   * @returns La instancia de Logger.
   */
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Registra una nueva acción realizada por un usuario.
   * 
   * @param user - El nombre del usuario que realiza la acción.
   * @param action - La descripción de la acción realizada por el usuario.
   * @returns No devuelve nada, solo registra la acción.
   */
  logAction(user: string, action: string): void {
    const timestamp = new Date();
    this.actions.push([user, action, timestamp]);
  }

  /**
   * Obtiene todas las acciones realizadas por un usuario específico.
   * 
   * @param user - El nombre del usuario cuyas acciones se desean obtener.
   * @returns Un arreglo con las acciones realizadas por el usuario especificado.
   */
  getActionsByUser(user: string): LogAction[] {
    return this.actions.filter(action => action[0] === user);
  }

  /**
   * Obtiene todas las acciones realizadas de un tipo específico.
   * 
   * @param actionType - El tipo de acción que se desea filtrar.
   * @returns Un arreglo con las acciones del tipo especificado.
   */
  getActionsByType(actionType: string): LogAction[] {
    return this.actions.filter(action => action[1] === actionType);
  }

  /**
   * Obtiene todas las acciones realizadas en un rango de fechas determinado.
   * 
   * @param startDate - La fecha de inicio del rango.
   * @param endDate - La fecha de fin del rango.
   * @returns Un arreglo con las acciones realizadas entre las fechas indicadas.
   */
  getActionsBetweenDates(startDate: Date, endDate: Date): LogAction[] {
    return this.actions.filter(action => action[2] >= startDate && action[2] <= endDate);
  }

  /**
   * Obtiene un iterador sobre todas las acciones registradas.
   * 
   * @returns Un iterador que permite recorrer todas las acciones registradas.
   */
  getActions(): IterableIterator<LogAction> {
    return this.actions[Symbol.iterator]();
  }
}

