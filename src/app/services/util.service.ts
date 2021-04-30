import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    colors = ['rgba(255, 99, 71, 0.6)', // red
              'rgba(0, 99, 210, 0.6)', // blue
              'rgba(0, 239, 127, 0.6)', // green
              'rgba(255, 239, 127, 0.6)', // yellow
              'rgba(0, 140, 255, 0.4)', // sky blue
              'rgba(32, 0, 5, 0.3)', // grey
              'rgba(0, 16, 227, 0.4)', // violet
              'rgba(17, 200, 255, 0.4)', // cyan
              'rgba(255, 64, 127, 0.6)', // pink
              'rgba(32, 59, 255, 0.7)', // blue
              'rgba(207, 201, 3, 0.3)', // yellow
              'rgba(207, 52, 3, 0.3)', // orange
              'rgba(189, 99, 120, 0.5)', // brown
              'rgba(254, 200, 255, 0.6)', // pink
              'rgba(8, 50, 255, 0.6)', // blue
              'rgba(255, 64, 48, 0.6)', // orange
              'rgba(8, 169, 255, 0.6)', // blue
              'rgba(81, 102, 255, 0.5)', // violet
              'rgba(234, 8, 10, 0.5)', // red
              'rgba(10, 8, 10, 0.3)' // grey
            ];

    getColors() {
        return [... this.colors];
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}