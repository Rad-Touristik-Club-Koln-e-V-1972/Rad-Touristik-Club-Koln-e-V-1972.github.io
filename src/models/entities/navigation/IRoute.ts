export default interface IRoute {
    children?: IRoute[]
    name?: string
    path: string
}
