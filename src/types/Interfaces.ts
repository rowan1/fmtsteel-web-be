export enum EMartialStatus{
    single="Single",
    married="Married",
    divorced="Divorced",
    widowed="Widowed",
    seperated="Separated"
}

export enum EMilitaryStatus{
    completed="Completed",
    postponed="Postponed",
    notApplicable="NotApplicable",
    exempted="Exempted"
}

export enum EGender{
    male="Male",
    female="Female"
}
export interface ICareersBody{
    id?:number,
    name?:string,
    email?:string,
    phone?:string,
    dateOfBirth?:Date,
    gender?:EGender,
    martialStatus?:EMartialStatus,
    militaryStatus?:EMilitaryStatus,
    resumeFile?:any,
    resumeFileName?:string
}

export interface IContactsBody{
    id?:number|string,
    phone?:string,
    email?:string,
    address?:string,
    createdAt?:Date,
    updatedAt?:Date
}

export interface IServicesBody{
    id?:number,
    title?:string,
    description?:string,
    path?:string[]
}

export interface IProjectBody{
    id?:number,
    title?:string,
    description?:string,
    image?:any,
    createdAt?:Date,
    updatedAt?:Date,
    path?:string[]
}

export interface IClientsBody{
    id?:number,
    image?:any
}