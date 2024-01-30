export class Person {
    private readonly name: string;
    private readonly age: number;
    private readonly gender: string;

    getName(): string  {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getGender(): string {
        return this.gender;
    }

}

export enum Gender {
    Male,
    Female
}
