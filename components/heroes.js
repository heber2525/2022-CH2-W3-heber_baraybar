import { Component } from './component.js';

export class Hero extends Component {
  template;
  constructor(arrayHeroes) {
    super();
    this.template = this.createTemplate(arrayHeroes);
  }
  createTemplate(arrayHeroes) {
    this.template = `
    <div>
    <label>'Hero name'</label>
    <input>
    <button>Add hero</button>
    `;
    let template = '<ul>';
    arrayHeroes.forEach((item) => {
      template += `<li><a href = ${item.id} ${item.name}</a><button>X</button></li>`;
    });
    template += `</ul></nav>`;
    return template;
  }
}
