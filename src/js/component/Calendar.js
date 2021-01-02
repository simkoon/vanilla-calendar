import Day from './Day';
import Week from './Week';

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
  constructor(element) {
    // 캘린더 날짜 설정 메뉴
    this.calendarMenu = document.createElement('div');
    this.calendarMenu.className = 'calendar-menu';
    this.prevBtn = document.createElement('Button');
    this.todayBtn = document.createElement('button');
    this.nowDayText = document.createElement('span');
    this.nextBtn = document.createElement('Button');

    this.todayBtn.innerHTML = 'today';
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
      this.$today.getFullYear() + '.' + this.$today.getMonth() + 1
    }`;

    this.prevBtn.addEventListener('click', () => {
      this.$today.setDate = 1;
      this.$today.setMonth(this.$today.getMonth() - 1);
      this.updateYearMonth();
      this.nowDayText.innerHTML = `${
        this.$today.getFullYear() + '.' + (this.$today.getMonth() + 1)
      }`;
    });
    this.nextBtn.addEventListener('click', () => {
      this.$today.setDate = 1;
      this.$today.setMonth(this.$today.getMonth() + 1);
      this.updateYearMonth();
      this.nowDayText.innerHTML = `${
        this.$today.getFullYear() + '.' + (this.$today.getMonth() + 1)
      }`;
    });
    this.todayBtn.addEventListener('click', () => {
      this.$today.setDate = 1;
      this.$today.setFullYear(TODAY.getFullYear());
      this.$today.setMonth(TODAY.getMonth());
      this.updateYearMonth();
      this.nowDayText.innerHTML = `${
        this.$today.getFullYear() + '.' + (this.$today.getMonth() + 1)
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
                (this.namugi > day
                  ? (this.mok + 1) * 7 + day
                  : this.mok * 7 + day)) *
                DAY_MILISECOND
          ),
          TODAY
        )
      );
    }
    this.container.append(this.month);

    element.append(this.container);
  }
  updateYearMonth() {
    console.log(this.days);
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
  getYear() {
    console.log('hi');
    console.log(this.inputTextYear);
  }
  setYearMonth(year, month) {}
}
