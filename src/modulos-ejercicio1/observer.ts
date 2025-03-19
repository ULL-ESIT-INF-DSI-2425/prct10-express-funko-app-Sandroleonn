export interface Observer {
    update(event: string, data: any): void;
  }
  
  export interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(event: string, data: any): void;
  }
  