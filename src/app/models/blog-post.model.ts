export class BlogPost {
  constructor(
    public id: string,
    public title: string,
    public body: string,
    public date: string,
    public imagePath: string,
    public tags: Array<string>
  ) {}
}
