export class Item {
    id: string;
    title: string;
    type: ItemType;
    icon: string;
}

export enum ItemType {
    session,
    task,
    file
}
