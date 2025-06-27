import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'espe-theme-toggle',
  shadow: false,
  styleUrl: 'espe-theme-toggle.css',
})
export class EspeThemeToggle {
  @Prop() initialTheme: string = 'light';
  @State() theme: string;

  componentWillLoad() {
    this.theme = this.initialTheme;
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.theme = select.value;
  }

  render() {
    return (
      <div>
        <button
          class={`theme-button ${this.theme}`}
          onClick={() => this.toggleTheme()}
          aria-pressed={this.theme === 'dark' ? 'true' : 'false'}
        >
          Tema: {this.theme}
        </button>


        <select onChange={e => this.onSelectChange(e)}>
          <option value="light" selected={this.theme === 'light'}>Claro</option>
          <option value="dark" selected={this.theme === 'dark'}>Oscuro</option>
        </select>
      </div>
    );
  }
}
