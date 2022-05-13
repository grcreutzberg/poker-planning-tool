import { prisma } from "../../prisma";
import { Player, PlayerData } from "../player";

export class PrismaPlayer implements Player {
    async create({ name, gameId }: PlayerData) {
        await prisma.player.create({
            data: {
                name,
                game: {
                    connect: {
                        id: gameId
                    }
                }
            }
        });
    };
}