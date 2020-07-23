import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);

    this.modal.addEventListener('click', () => this.buttonClose());
    document.addEventListener('keydown', (event) => this.buttonEscape(event));
  }
  open() {
    document.body.append(this.modal);
    document.body.classList.add('is-modal-open');
  }
  setTitle(title) {
    this.modal.querySelector('.modal__title').textContent = title;
  }
  setBody(node) {
    this.modalBody = this.modal.querySelector('.modal__body');
    this.modalBody.innerHTML = '';
    this.modalBody.append(node);
  }
  close() {
    document.body.classList.remove('is-modal-open');
    this.modal.remove();
  }
  buttonClose() {
    this.modal.querySelector('.modal__close');
    this.close();
  }
  buttonEscape(event) {
    if (event.code === 'Escape') {
       this.close();
    }
  }

}
