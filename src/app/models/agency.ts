export class Agency {

  constructor(
    public brandingColors: {
      primary: string
    },
    public logo: string
  ) {}

  static create(data) {
    return new Agency(data.brandingColors, data.logo);
  }

}
