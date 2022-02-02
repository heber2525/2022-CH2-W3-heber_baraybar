import { Component } from './component.js';

export class Home extends Component {
  template;
  
  constructor(title = 'Top Heroes', subTitle = 'Hero Search') {
    super();
    this.template = `
    <body>
      <h2>${title}</h2>
      <div>
        <a>Narco</a>
        <a>Bombasto</a>
        <a>Celeritas</a>
        <a>Magneta</a>
      </div>
  <div>
    <label>${subTitle}</label>
    <input type="text" />
    <ul></ul>
  </div>
</body>
`;
  }
}
