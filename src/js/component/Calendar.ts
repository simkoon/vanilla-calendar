import Day from './grid/Day';
import Week from './grid/Week';
import DaySelector from './grid/DaySelector';

const DAY_MILISECOND = 86400000;
const TODAY = new Date();

const DAY = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

export default class Calendar {
  // 날짜 계산을 위한 변수들 몫, 나머지,
  private mok: number;
  private namugi: number;

  calendarMenu: HTMLDivElement;
  prevBtn: HTMLButtonElement;
  todayBtn: HTMLButtonElement;
  nowDayText: HTMLSpanElement;
  nextBtn: HTMLButtonElement;

  container: HTMLDivElement;
  month: HTMLDivElement;
  $today: Date;

  weeks: Array<Week>;
  days: Array<Day>;

  constructor(element: HTMLElement) {
    const daySelector = new DaySelector();
    // 캘린더 날짜 설정 메뉴
    this.calendarMenu = document.createElement('div');
    this.calendarMenu.className = 'calendar-menu';
    this.prevBtn = document.createElement('button');
    this.todayBtn = document.createElement('button');
    this.nowDayText = document.createElement('span');
    this.nextBtn = document.createElement('button');

    this.todayBtn.innerHTML = 'Today';
    this.todayBtn.className = 'today-btn';
    this.prevBtn.innerHTML = ' < ';
    this.nextBtn.innerHTML = ' > ';
    this.calendarMenu.append(
      this.todayBtn,
      this.prevBtn,
      this.nextBtn,
      this.nowDayText
    );

    // 요일 표시
    const dayWeek = document.createElement('div');
    dayWeek.className = 'day-week-container';
    dayWeek.innerHTML = `
        <div class="day-week sunday"> 일 </div>
        <div class="day-week"> 월 </div>
        <div class="day-week"> 화 </div>
        <div class="day-week"> 수 </div>
        <div class="day-week"> 목 </div>
        <div class="day-week"> 금 </div>
        <div class="day-week"> 토 </div>
        `;

    this.container = document.createElement('div');
    this.container.className = 'container';
    this.container.append(this.calendarMenu, dayWeek);

    this.month = document.createElement('div');
    this.month.className = 'month';
    this.$today = new Date();

    this.nowDayText.innerHTML = `${
      this.$today.getFullYear() +
      '.' +
      (this.$today.getMonth() + 1 < 10
        ? '0' + (this.$today.getMonth() + 1)
        : this.$today.getMonth() + 1)
    }`;

    this.prevBtn.addEventListener('click', () => {
      this.$today.setDate(1);
      this.$today.setMonth(this.$today.getMonth() - 1);
      this.mok = Math.floor(this.$today.getDate() / 7);
      this.namugi = (this.$today.getDay() % 7) - 1;
      this.updateYearMonth();
      this.nowDayText.innerHTML = `${
        this.$today.getFullYear() +
        '.' +
        (this.$today.getMonth() + 1 < 10
          ? '0' + (this.$today.getMonth() + 1)
          : this.$today.getMonth() + 1)
      }`;
    });
    this.nextBtn.addEventListener('click', () => {
      this.$today.setDate(1);
      this.$today.setMonth(this.$today.getMonth() + 1);
      this.mok = Math.floor(this.$today.getDate() / 7);
      this.namugi = (this.$today.getDay() % 7) - 1;
      this.updateYearMonth();
      this.nowDayText.innerHTML = `${
        this.$today.getFullYear() +
        '.' +
        (this.$today.getMonth() + 1 < 10
          ? '0' + (this.$today.getMonth() + 1)
          : this.$today.getMonth() + 1)
      }`;
    });
    this.todayBtn.addEventListener('click', () => {
      this.$today = new Date();
      this.mok = Math.floor(this.$today.getDate() / 7);
      this.namugi = (this.$today.getDay() % 7) - 1;
      this.updateYearMonth();
      this.nowDayText.innerHTML = `${
        this.$today.getFullYear() +
        '.' +
        (this.$today.getMonth() + 1 < 10
          ? '0' + (this.$today.getMonth() + 1)
          : this.$today.getMonth() + 1)
      }`;
    });

    const date = this.$today.getDate();
    const day = this.$today.getDay();

    this.mok = Math.floor(date / 7);
    this.namugi = (date % 7) - 1;
    this.weeks = [];
    this.days = [];
    let j = -1;

    for (let i = 0; i < 42; i++) {
      if (!(i % 7)) {
        this.weeks.push(new Week(this.month));
        j++;
      }
      this.days.push(
        new Day(
          this.weeks[j].element,
          this.$today,
          new Date(
            this.$today.getTime() +
              (i -
                (this.namugi > this.$today.getDay()
                  ? (this.mok + 1) * 7 + this.$today.getDay()
                  : this.mok * 7 + this.$today.getDay())) *
                DAY_MILISECOND
          ),
          TODAY,
          daySelector
        )
      );
    }
    this.container.append(this.month);

    element.append(this.container);
    this.onWindowClicked(daySelector);
  }

  updateYearMonth(): void {
    this.days.forEach((day, i) => {
      day.setDate(
        new Date(
          this.$today.getTime() +
            (i -
              (this.namugi > this.$today.getDay()
                ? (this.mok + 1) * 7 + this.$today.getDay()
                : this.mok * 7 + this.$today.getDay())) *
              DAY_MILISECOND
        )
      );
      day.updateUI(this.$today);
    });
  }
  onWindowClicked(daySelector: DaySelector): void {
    window.addEventListener(
      'click',
      (e) => {
        daySelector.setDisplayNone();
      },
      true
    );
  }
}
