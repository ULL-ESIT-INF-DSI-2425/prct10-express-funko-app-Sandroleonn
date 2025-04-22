/**
 * Tipos de respuesta para el servidor Funko
 */

import { Funko } from "./Funko.js";

export type FunkoResponse = {
  success: boolean;
  message?: string;
  funko?: Funko;
  funkos?: Funko[];
};

export type ErrorResponse = {
  success: boolean;
  error: string;
};