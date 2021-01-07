import Schedule from '../../data/Schedule';

export default class ScheduleTitle {
  private schedule: Schedule;
  private element: HTMLDivElement;
  constructor(schedule: Schedule) {
    this.schedule = schedule;
    this.element = document.createElement('div');
  }
}
