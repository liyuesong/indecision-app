class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting(bind);
    }
    getGreeting() {
        return `Hi, My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;


class NewSyntax {
    name = "Jane";
    getGreeting = () => {
        return `Hi, My name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;