screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


const source = interval(1000);
const timerA = timer(5000);

const exemple = source.pipe(takeUntil(timerA));
const subscribe = exemple.subscribe(val => console.log(val));