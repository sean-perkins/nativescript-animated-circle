import { Observable } from 'tns-core-modules/data/observable';
import { screen } from 'tns-core-modules/platform';

export class HelloWorldModel extends Observable {
  public message: string;
  private _screenWidth: number;
  private _screenHeight: number;
  private _progress: number = 30;

  constructor() {
    super();
    this._screenWidth = screen.mainScreen.widthDIPs;
    this._screenHeight = screen.mainScreen.heightDIPs;
    setInterval(() => {
      if (this.progress === 100) {
        this.progress = 0;
      }
      this.progress++;
    }, 1000);
  }

  get screenHeight() {
    return this._screenHeight;
  }
  get screenWidth() {
    return this._screenWidth;
  }

  get centerScreen() {
    return this._screenWidth * 0.5;
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
