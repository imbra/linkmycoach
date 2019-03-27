import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ColorsService } from '../../../shared/colors/colors.service';
import { CalendarComponent } from '../../extras/calendar/calendar.component';

declare var $: any;
@Component({
    selector: 'app-dashboardv1',
    templateUrl: './dashboardv1.component.html',
    styleUrls: ['./dashboardv1.component.scss']
})
export class Dashboardv1Component implements OnInit, AfterViewInit, OnDestroy {

    $calendar: any;

    calendarOptions: any = {
        // isRTL: true,

    };

    calendarEvents: Array<any> = this.createDemoEvents();
    selectedEvent = null;

    sparkValues = [1, 3, 4, 4, 5, 5, 6, 7, 8, 9 , 9, 10, 12];

    easyPiePercent: 70;
    pieOptions = {
        animate: {
            duration: 800,
            enabled: true
        },
        barColor: this.colors.byName('info'),
        trackColor: 'rgba(200,200,200,0.4)',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        size: 145
    };

    sparkOptions1 = {
        barColor: this.colors.byName('info'),
        height: 30,
        barWidth: '5',
        barSpacing: '2'
    };

    sparkOptions2 = {
        type: 'line',
        height: 80,
        width: '100%',
        lineWidth: 2,
        lineColor: this.colors.byName('purple'),
        spotColor: '#888',
        minSpotColor: this.colors.byName('purple'),
        maxSpotColor: this.colors.byName('purple'),
        fillColor: '',
        highlightLineColor: '#fff',
        spotRadius: 3,
        resize: true
    };

    splineHeight = 280;
    splineData: any;
    splineOptions = {
        series: {
            lines: {
                show: false
            },
            points: {
                show: true,
                radius: 4
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.5
            }
        },
        grid: {
            borderColor: '#eee',
            borderWidth: 1,
            hoverable: true,
            backgroundColor: '#fcfcfc'
        },
        tooltip: true,
        tooltipOpts: {
            content: (label, x, y) => x + ' : ' + y
        },
        xaxis: {
            tickColor: '#fcfcfc',
            mode: 'categories'
        },
        yaxis: {
            min: 0,
            max: 150, // optional: use it for a clear represetation
            tickColor: '#eee',
            // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
            tickFormatter: (v) => {
                return v/* + ' visitors'*/;
            }
        },
        shadowSize: 0
    };

    @ViewChild('fullcalendar') fullcalendar: ElementRef;

    constructor(public colors: ColorsService, public http: HttpClient) {
        http.get('assets/server/chart/spline.json').subscribe(data => this.splineData = data);
        this.calendarOptions.events = this.calendarEvents;
    }

    ngOnInit() {
        this.$calendar = $(this.fullcalendar.nativeElement);
    }

    ngAfterViewInit() {
        // init calendar plugin
        this.$calendar.fullCalendar(this.calendarOptions);
    }

    addRandomEvent() {
        // add dynamically an event
        this.addEvent({
            title: 'Random Event',
            start: new Date((new Date).getFullYear(), (new Date).getMonth(), Math.random() * (30 - 1) + 1),
            backgroundColor: '#c594c5', // purple
            borderColor: '#c594c5' // purple
        });
    }

    eventClick(calEvent, jsEvent, view) {

        this.selectedEvent = {
            title: calEvent.title,
            start: calEvent.start,
            url: calEvent.url || ''
        };

        console.log('Event: ' + calEvent.title);
        console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        console.log('View: ' + view.name);

    }

    dayClick(date, jsEvent, view) {
        this.selectedEvent = {
            date: date.format()
        };
    }

    addEvent(event) {
        // store event
        this.calendarEvents.push(event);
        // display event in calendar
        this.$calendar.fullCalendar('renderEvent', event, true);
    }

    createDemoEvents() {
        // Date for the calendar events (dummy data)
        const date = new Date(),
            d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

        return [{
            title: 'All Day Event',
            start: new Date(y, m, 1),
            backgroundColor: '#f56954', // red
            borderColor: '#f56954' // red
        }, {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            backgroundColor: '#f39c12', // yellow
            borderColor: '#f39c12' // yellow
        }, {
            title: 'Meeting',
            start: new Date(y, m, d, 10, 30),
            allDay: false,
            backgroundColor: '#0073b7', // Blue
            borderColor: '#0073b7' // Blue
        }, {
            title: 'Lunch',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false,
            backgroundColor: '#00c0ef', // Info (aqua)
            borderColor: '#00c0ef' // Info (aqua)
        }, {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            backgroundColor: '#00a65a', // Success (green)
            borderColor: '#00a65a' // Success (green)
        }, {
            title: 'Open Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: '//google.com/',
            backgroundColor: '#3c8dbc', // Primary (light-blue)
            borderColor: '#3c8dbc' // Primary (light-blue)
        }];
    }

    colorByName(name) {
        return this.colors.byName(name);
    }

    ngOnDestroy() {
        this.$calendar.fullCalendar('destroy');
    }

}
