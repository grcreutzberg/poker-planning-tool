export interface PlayerData {
    name: string;
    gameId: string;
}

export interface Player {
    create: (data: PlayerData) => Promise<void>;
}