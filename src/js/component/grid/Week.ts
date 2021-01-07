export default class Week {
  element: HTMLDivElement;
  constructor(parent: HTMLElement) {
    this.element = document.createElement('div');
    this.element.className = 'week';
    parent.append(this.element);
  }
}
