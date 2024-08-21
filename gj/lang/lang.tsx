import ko from "./ko-kr"

export type lang = Record<string,string|object>
export type Config = {
    title:string,
    description:string,
}

export default function LangConfig (lang:string) {
    //나라별 text 추가해야됨
    return ko;
}

