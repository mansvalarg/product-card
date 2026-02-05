export class Modal {

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeButton.removeEventListener('click', this.closeFunction);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeFunction);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    this.openButton = document.getElementById(buttonId);
    this.openFunction = () => this.open();
    this.openButton.addEventListener('click', this.openFunction);
  }

  #initClose(shouldCloseOnOverlay) {
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.closeFunction = () => this.close();
    this.closeButton.removeEventListener('click', this.closeFunction);
    this.closeButton.addEventListener('click', this.closeFunction);

    if (shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeFunction);
      this.overlay.addEventListener('click', this.closeFunction);
    }
  }

}