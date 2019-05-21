import { User } from './user.model';

export class Session {
    id: string;
    dateTimeStart: Date;
    duration: number;
    title: string;
    description: string;
    location: string;
    geoLocation: Geolocation;
    attendees: User[];
}
