export interface ICurrentUser{
    token:string,
    userId:string
}

interface IRole{
    _id:string,
    roleName:string
}

interface IUser{
    _id:string,
    birthDay:string,
    email:string,
    fullName:string,
    idModelDetect?:number,
    image:string,
    phone:string,
    sex:boolean
}

export interface IAccountInfo{
    user?:IUser,
    role?:IRole
    isSecurity:boolean,
    _id:string
}

