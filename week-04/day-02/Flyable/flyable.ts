'use strict';

export interface flyable {
  takeOff(): void;
  fly(): void;
  land(): void;
}
