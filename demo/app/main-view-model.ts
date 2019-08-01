import { Observable } from 'tns-core-modules/data/observable';
import { Prop } from './prop';

export class HelloWorldModel extends Observable {
  @Prop() message: string;

  @Prop() progress: number = 30;

  constructor() {
    super();
    setInterval(() => {
      if (this.progress === 100) {
        this.progress = 0;
      }
      this.progress++;
    }, 1000);
  }
}
