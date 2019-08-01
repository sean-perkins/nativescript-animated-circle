import { Color } from 'tns-core-modules/color';
import * as utils from 'tns-core-modules/utils/utils';
import {
  barColorProperty,
  Common,
  rimColorProperty,
  spinBarColorProperty
} from './animated-circle.common';

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

  initNativeView() {}

  onLayout(left, top, right, bottom) {
    super.onLayout(left, top, right, bottom);
    const dpWidth = utils.layout.toDeviceIndependentPixels(this.effectiveWidth);
    const dpHeight = utils.layout.toDeviceIndependentPixels(
      this.effectiveHeight
    );

    this._label.frame = CGRectMake(0, 0, dpWidth, dpHeight);
    this._ios.addSubview(this._label);
    this._ios.bringSubviewToFront(this._label);
  }

  get ios() {
    return this._ios;
  }

  public spin() {}

  public stopSpinning() {}

  /**
   * The percentage value completed (whole number)
   */
  set progress(value: number) {
    this._ios.progressValue = Number(value / 100);
  }

  get spinBarColor(): Color {
    return this._ios.alternativeColor;
  }
  set spinBarColor(value: Color) {
    this._ios.alternativeColor = value.ios;
  }
  get rimColor(): Color {
    return this._ios.alternativeColor;
  }
  set rimColor(value: Color) {
    this._ios.alternativeColor = value.ios;
  }
  get barColor(): Color {
    return this._ios.progressColor;
  }
  set barColor(value: Color) {
    this._ios.progressColor = value.ios;
  }

  /**
   * The "remaining" circle color
   */
  [rimColorProperty.setNative](value: any) {
    this._ios.alternativeColor = value.ios;
  }

  /**
   * The fill color of the percentage completed
   */
  [barColorProperty.setNative](value: any) {
    this._ios.progressColor = value.ios;
  }

  /**
   * The fill color of the percentage completed
   */
  [spinBarColorProperty.setNative](value: any) {
    this._ios.alternativeColor = value.ios;
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
    } else if (typeof value === 'string') {
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
