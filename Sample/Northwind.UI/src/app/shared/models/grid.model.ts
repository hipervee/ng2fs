export interface IGrid {
    Data: any[];
    ToTalRecords: number;
}

export class GridResponse implements IGrid {
    public Data: any[];
    public ToTalRecords: number;

    constructor() {
        this.Data = [];
        this.ToTalRecords = 0;
    }
}
