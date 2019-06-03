interface IHero extends Document  {
    _id: string;
    Name: string;
    Attributes: {
        Attack: number,
        Defense: number,
        Health: number
    };
    Description: string;
    Portrait: string;
    Selected: boolean;
  }
  export default IHero;