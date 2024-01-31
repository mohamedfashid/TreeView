import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() newChildName: string = '';
  @Output() addChildEvent = new EventEmitter<string>();
  @Output() closeModalEvent = new EventEmitter<void>();

  add(): void {
    if (this.newChildName) {
      this.addChildEvent.emit(this.newChildName);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

}
