import DaySelector from './DaySelector';

export default class Day {
  private today: Date;
  private date: Date;
  private element: HTMLDivElement;
  private parent: HTMLDivElement;
  private daySelector: DaySelector;

  constructor(
    parent: HTMLDivElement,
    reference: Date,
    date: Date,
    today: Date,
    daySelector: DaySelector
  ) {
    this.daySelector = daySelector;
    this.today = today;
    this.date = date;
    this.element = document.createElement('div');
    this.parent = parent;

    this.updateUI(reference);
    this.parent.append(this.element);

    this.setClickEvent();
  }

  setDate(date: Date) {
    this.date = date;
  }
  getDate(): Date {
    return this.date;
  }

  updateUI(reference: Date) {
    this.element.className = 'day';
    if (this.date.getDay() === 0) {
      this.element.className = 'sunday day';
    }
    if (this.date.getMonth() !== reference.getMonth()) {
      if (this.date.getDay() === 0) {
        this.element.className = 'day sunday-not-this-month';
      } else {
        this.element.className = 'day day-not-this-month';
      }
    }
    if (
      this.date.getFullYear() === this.today.getFullYear() &&
      this.date.getDate() === this.today.getDate() &&
      this.date.getMonth() === this.today.getMonth()
    ) {
      this.element.innerHTML = `
        <div class="day-today-container">
          <span>${this.date.getDate()}</span>
          <span class="today-text">today</span>
        </div>`;
    } else {
      this.element.innerHTML = `${this.date.getDate()}`;
    }
  }
  onClick = (e: MouseEvent): void => {
    this.daySelector
      .setDate(this.date)
      .appendTo(this.parent)
      .setPositionLeft(`${(100 / 7) * this.date.getDay()}%`)
      .setWidth(`${100 / 7}%`)
      .setDisplayBlock();
  };

  setClickEvent(): void {
    this.element.addEventListener('click', this.onClick);
  }
}
