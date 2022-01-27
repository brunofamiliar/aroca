export interface RequestPollType {
    status: string,
    data: PollType
}

export interface PollType {
    voting_id: number,
    voting_title: string,
    voting_question: string,
    state: string,
    cover: string,
    primary_color: string,
    secondary_color: string,
    program_id: number,
    program_name: string,
    edition_name: string,
    alternatives: AlternativesType[]
}

export interface AlternativesType {
    id: number,
    name: string,
    photo: string
}