export interface IGrid<T> {
    data: T[];
    totalRecords: number;
}

export class GridResponse<T> implements IGrid<T> {
    public data: T[];
    public totalRecords: number;

    constructor() {
        this.data = null;
        this.totalRecords = 0;
    }
}
