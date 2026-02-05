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
    this.closeButton.removeEventListener('click', this.close);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.close);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    this.openButton = document.getElementById(buttonId);
    this.openButton.addEventListener('click', this.open);
  }

  #initClose(shouldCloseOnOverlay) {
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.closeButton.removeEventListener('click', this.close);
    this.closeButton.addEventListener('click', this.close);

    if (shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.close);
      this.overlay.addEventListener('click', this.close);
    }
  }

}