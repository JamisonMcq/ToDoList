export class ListItem {
  // id: number | undefined;
  title: string;
  description: string;
  doBy: string;

  constructor(title: string, description: string, doBy: string) {
    this.title = title;
    this.description = description;
    this.doBy = doBy;
  }
}
