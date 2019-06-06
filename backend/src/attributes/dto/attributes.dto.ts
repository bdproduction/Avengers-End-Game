export default class NewAttributesDto {
    private Attack: number;
    private Defense: number;
    private Health: number;
    constructor({Attack, Defense, Health}: NewAttributesDto) {
        this.Attack = Attack;
        this.Defense = Defense;
        this.Health = Health;
    }
}