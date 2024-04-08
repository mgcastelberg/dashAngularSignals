import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  // creamos señal
  public showContent = signal(false);

  // metodo para cambiar la señal
  public toogleContent() {
    this.showContent.update( value => !value );
  }
}
