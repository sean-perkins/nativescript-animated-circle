import { Common } from './animated-circle.common';
import { Color } from 'tns-core-modules/color/Color';

declare const DRCircularProgressView;

export class AnimatedCircle extends Common {

    private _ios: any;

    constructor() {
        super();
        this._ios = DRCircularProgressView.new();
        this._ios.alternativeColor = new Color('#FF5722').ios;
        this._ios.progressColor = new Color('#3D8FF4').ios;
        this._ios.thickness = 5;
    }

    createNativeView() {
        return this._ios;
    }

    initNativeView() {
    }

    get ios() {
        return this._ios;
    }

    /**
     * The percentage value completed (whole number)
     */
    set progress(value: number) {
        this._ios.progressValue = Number(value / 100);
    }

    /**
     * The fill color of the percentage completed
     */
    set barColor(value: string | UIColor) {
        if (value instanceof UIColor) {
            this._ios.progressColor = value;
        }
        else if (typeof value === 'string') {
            this._ios.progressColor = new Color(value).ios;
        }
    }

    /**
     * The "remaining" circle color
     */
    set rimColor(value: string | UIColor) {
        if (value instanceof UIColor) {
            this._ios.alternativeColor = value;
        }
        else if (typeof value === 'string') {
            this._ios.alternativeColor = new Color(value).ios;
        }
    }

    /**
     * The draw direction for the filled circle
     */
    set clockwise(value: boolean) {
        this._ios.clockwise = value;
    }

    /**
     * The thickness of the circle
     */
    set rimWidth(value: number) {
        this._ios.thickness = value;
    }

    /**
     * The start angle to begin drawing the circle at
     */
    set startAngle(value: number) {
        this._ios.startAngle = value;
    }

    /**
     * The ending angle to draw the circle to
     */
    set endAngle(value: number) {
        this._ios.endAngle = value;
    }

}
