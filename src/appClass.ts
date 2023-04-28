class Friends {

    private _name: string;
    constructor(name?: string){

        this._name = name ?? 'no name';
    }

    get name(): string {
        return this._name;
    }
}

const mile = new Friends('Mile');

console.log(mile.name);