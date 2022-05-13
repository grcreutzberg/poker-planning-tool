export interface GameData {
    name: string;
    code: string;
}

export interface Game {
    create: (data: GameData) => Promise<void>;
}

export interface findGameIdByCodeData {
    code: string;
}

export interface findGameIdByCode {
    create: (data: findGameIdByCodeData) => Promise<void>;
}