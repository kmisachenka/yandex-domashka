import { Tag } from '../../types';

export default class Tags {
  private tags: Tag[];

  private constructor(tags: Tag[]) {
    this.tags = tags;
  }

  public static factory(tags: Tag[]): Tags {
    return new Tags(tags);
  }

  public toArray(): Tag[] {
    return this.tags;
  }

  public addTag(tag: Tag): void {
    // Нет проверки на то что такой тег уже есть
    this.tags.push(tag);
  }

  public hasTag(id: number): boolean {
    const tag = this.tags.find(t => t.id === Number(id));
    return Boolean(tag);
  }
}
