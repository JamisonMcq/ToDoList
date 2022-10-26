export class ListItem {
  id: number;
  title: string;
  description: string;
  doBy: string;

  constructor(id: number, title: string, description: string, doBy: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.doBy = doBy;
  }
}
