import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
    public message: string;

    private _progress: number = 30;

    constructor() {
        super();
        setInterval(() => {
            if (this.progress === 100) {
                this.progress = 0;
            }
            this.progress++;
        }, 1000);
    }

    set progress(value: number) {
        if (this._progress !== value) {
            this._progress = value;
            this.notifyPropertyChange('progress', value);
        }
    }



    get progress() {
        return this._progress;
    }
}
