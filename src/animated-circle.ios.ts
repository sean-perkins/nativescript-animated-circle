// @ts-nocheck
import { Common } from './animated-circle.common';
import { Color, Utils } from '@nativescript/core';

export class AnimatedCircle extends Common {
    private _ios: any;
    private _label: UILabel;
    private _text: string;

    constructor() {
        super();
        this._ios = DRCircularProgressView.new();
        this._ios.alternativeColor = new Color('#FF5722').ios;
        this._ios.progressColor = new Color('#3D8FF4').ios;
        this._ios.backgroundColor = new Color('#348F74').ios;
        this._ios.thickness = 5;


        this._label = UILabel.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
        this._label.textAlignment = NSTextAlignment.Center;
        this._label.textColor = new Color('#3D8FF4').ios;
    }

    createNativeView() {
        return this._ios;
    }

    initNativeView() {

    }

    onLayout(left, top, right, bottom) {
        super.onLayout(left, top, right, bottom);
        const dpWidth = Utils.layout.toDeviceIndependentPixels(this.effectiveWidth);
        const dpHeight = Utils.layout.toDeviceIndependentPixels(this.effectiveHeight);

        this._label.frame = CGRectMake(0, 0, dpWidth, dpHeight);
        this._ios.addSubview(this._label);
        this._ios.bringSubviewToFront(this._label);
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

    set text(value: string) {
        this._label.text = value;
    }

    get text() {
        return this._label.text;
    }

    set textColor(value: string | UIColor) {
        if (value instanceof UIColor) {
            this._label.textColor = value;
        }
        else if (typeof value === 'string') {
            this._label.textColor = new Color(value).ios;
        }
    }

    set textSize(value: number) {
        this._label.font = this._label.font.fontWithSize(value);
    }

    get textSize() {
        return this._label.font.pointSize;
    }

}
