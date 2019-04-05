import { Color } from '../types';

export default class Colors {
  private colors: Color[];

  private constructor(colors: Color[]) {
    this.colors = colors;
  }

  public static factory(colors: Color[]): Colors {
    return new Colors(colors);
  }

  public toArray(): Color[] {
    return this.colors;
  }

  public addColor(color: Color): void {
    // Нет проверки на то что такой цвет уже есть
    this.colors.push(color);
  }

  public hasColor(id: number): boolean {
    const color = this.colors.find(c => c.id === Number(id));
    return Boolean(color);
  }
}
