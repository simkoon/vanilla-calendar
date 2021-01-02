export default class Day {
  constructor(parent, reference, date, today) {
    this.today = today;
    this.date = date;
    this.element = document.createElement('div');

    console.dir(date.getMonth());

    this.updateUI(reference);
    parent.append(this.element);
  }

  setDate(date) {
    this.date = date;
  }

  updateUI(reference) {
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
      this.element.innerHTML = this.date.getDate();
    }
  }
}
