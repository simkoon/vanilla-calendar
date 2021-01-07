export default class Schedule {
  private id: string;
  private title: string;
  private start: string;
  private end: string;

  constructor(id: string, title: string, start: string, end: string) {
    this.id = id;
    this.title = title;
    this.start = start;
    this.end = end;
  }

  getStartInDate(): Date {
    return new Date(this.start);
  }
  getEndInDate(): Date {
    return new Date(this.end);
  }
}

export const fakeData: Array<Schedule> = [
  new Schedule(
    '1',
    'first schedule',
    '2021-01-05 03:00:00',
    '2021-01-05 05:00:00'
  ),
  new Schedule(
    '2',
    'first schedule',
    '2021-01-07 03:00:00',
    '2021-01-07 05:00:00'
  ),
  new Schedule(
    '3',
    'first schedule',
    '2021-01-11 03:00:00',
    '2021-01-13 05:00:00'
  ),
  new Schedule(
    '4',
    'first schedule',
    '2021-01-08 03:00:00',
    '2021-01-11 05:00:00'
  ),
];
