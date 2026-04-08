export type IError = {
    [key: string]: string[]
}

export interface IState {
    isSaved: boolean
    message?: string
    errors?: IError
}