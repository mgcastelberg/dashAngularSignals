import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';
@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  // creamos señal
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  constructor(){
    console.log(this.grade());
  }

  // metodo para cambiar la señal
  public toogleContent() {
    this.showContent.update( value => !value );
    this.grade.set('A');
  }
}
