import { resolve } from "path/posix";
import User, { IUser } from "../models/User.model";

interface ICreateUserInput {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
}

async function CreateUser({email, firstName, lastName}:ICreateUserInput): Promise<IUser>  {
    return new Promise<User>((resolve, rejject) => {})
}

export default {
    CreateUser
}