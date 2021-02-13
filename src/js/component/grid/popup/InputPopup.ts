export default class InputPopup {
  private element: HTMLDivElement;
  private parent: HTMLDivElement;

  constructor(parent: HTMLDivElement) {
    this.element = document.createElement('div');
    this.element.className = 'input-popup';
    this.parent = parent;
    
    this.parent.append(this.element);
  }
}
