export interface IUser {
    email: String;
    firstName: String;
    lastName: String;
}

export default class User implements IUser {
    email: String;
    firstName: String;
    lastName: String;

    constructor(email: String, firstName: String, lastName: String) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}