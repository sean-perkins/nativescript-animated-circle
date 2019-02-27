import { Common } from './animated-circle.common';
import { Color } from 'tns-core-modules/color';
import * as app from 'tns-core-modules/application';

declare const com, android, at;

export class AnimatedCircle extends Common {

    private _android: any;

    private _progress: number;
    private _animateFrom: number;
    private _animationDuration = 1000;
    private _animated: boolean;
    private _maxValue = 100;
    private _rimColor = '#FF5722';
    private _rimWidth = 5;
    private _spinBarColor: any;
    private _barWidth: number;
    private _startAngle: number;
    private _text = '';
    private _textColor = new Color('orange');
    private _textSize = 28 * 10;

    clockwise = true;

    barColor = '#3D8FF4';
    fillColor: any;


    constructor() {
        super();
    }

    createNativeView() {
        return new at.grabner.circleprogress.CircleProgressView(this._context, null);
    }

    initNativeView() {
        this.android.setAutoTextSize(false);
        this.android.setTextMode(at.grabner.circleprogress.TextMode.TEXT);
        this.android.setTextScale(1.1);
        this.android.setTextSize(300);
        this.android.setUnitVisible(false);
        this.updateAnimatedCircle();
    }

    get android() {
        return this.nativeView;
    }

    set progress(value: number) {
        this._progress = Number(value);
        this.updateAnimatedCircle();
    }

    get progress(): number {
        return this._progress;
    }

    set animateFrom(value: number) {
        this._animateFrom = Number(value);
        this.updateAnimatedCircle();
    }

    get animateFrom(): number {
        return this._animateFrom;
    }

    set animationDuration(value: number) {
        this._animationDuration = Number(value);
        this.updateAnimatedCircle();
    }

    get animationDuration(): number {
        return this._animationDuration;
    }

    set animated(value: boolean) {
        this._animated = Boolean(value);
        this.updateAnimatedCircle();
    }

    get animated(): boolean {
        return this._animated;
    }

    set maxValue(value: number) {
        this._maxValue = Number(value);
        this.updateAnimatedCircle();
    }

    get maxValue(): number {
        return this._maxValue;
    }

    set rimColor(value: any) {
        this._rimColor = value;
        this.updateAnimatedCircle();
    }

    get rimColor() {
        return this._rimColor;
    }

    set rimWidth(value: number) {
        this._rimWidth = Number(value);
        this.updateAnimatedCircle();
    }

    get rimWidth() {
        return this._rimWidth;
    }

    set spinBarColor(value: any) {
        this._spinBarColor = value;
        this.updateAnimatedCircle();
    }

    get spinBarColor() {
        return this._spinBarColor;
    }

    set startAngle(value: number) {
        this._startAngle = Number(value);
        this.updateAnimatedCircle();
    }

    get startAngle() {
        return this._startAngle;
    }

    set barWidth(value: number) {
        this._barWidth = Number(value);
        this.updateAnimatedCircle();
    }

    get barWidth() {
        return this._barWidth;
    }

    set text(value: string) {
        this._text = value;
        this.updateAnimatedCircle();
    }

    get text() {
        return this.android.getText();
    }

    set textColor(value: string) {
        this._textColor = new Color(value);
        this.updateAnimatedCircle();
    }

    set textSize(value: number) {
        this._textSize = value * 10;
        this.updateAnimatedCircle();
    }

    get textSize() {

        return this.android.getTextSize();
    }

    private updateAnimatedCircle(): void {
        if (this.android) {
            this.android.setText(this._text);
            this.android.setTextColor(this._textColor.argb);
            this.android.setTextSize(this._textSize);
            if (this.animated) {
                if (this.animateFrom) {
                    this.android.setValueAnimated(this.animateFrom, this.progress, this.animationDuration);
                }
                else {
                    if (!this._animationDuration) {
                        this.android.setValueAnimated(this.progress);
                    }
                    else {
                        this.android.setValueAnimated(this.progress, this.animationDuration);
                    }
                }
            }
            else {
                this.android.setValue(this.progress);
            }
            this.android.setMaxValue(this.maxValue);
            if (this.rimColor) {
                this.android.setRimColor(new Color(this.rimColor).argb);
            }
            if (this.spinBarColor) {
                this.android.setSpinBarColor(new Color(this.spinBarColor).argb);
            }
            if (this.startAngle) {
                this.android.setStartAngle(this.startAngle);
            }
            if (this.rimWidth) {
                this.android.setBarWidth(this.rimWidth);
                this.android.setRimWidth(this.rimWidth);
            }
            if (this.barColor) {
                this.android.setBarColor([new Color(this.barColor).argb]);
            }
            if (this.fillColor) {
                this.android.setFillCircleColor(new Color(this.fillColor).argb);
            }

            this.android.setDirection(this.clockwise ? at.grabner.circleprogress.Direction.CW : at.grabner.circleprogress.Direction.CCW);
        }
    }

}
