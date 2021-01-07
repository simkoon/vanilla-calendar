export default class DaySelector {
  private date!: Date;
  private element: HTMLDivElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'day-selector';
  }
  setDate(date: Date): DaySelector {
    this.date = date;
    return this;
  }
  setPositionLeft(positionLeft: string): DaySelector {
    this.element.style.left = `${positionLeft}`;
    return this;
  }
  appendTo(parent: HTMLDivElement): DaySelector {
    parent.append(this.element);
    return this;
  }
  setWidth(width: string): DaySelector {
    this.element.style.width = width;
    return this;
  }
  setDisplayNone(): DaySelector {
    this.element.style.display = 'none';
    return this;
  }
  setDisplayBlock(): DaySelector {
    this.element.style.display = 'block';
    return this;
  }
}
