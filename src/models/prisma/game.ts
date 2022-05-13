import { prisma } from "../../prisma";
import { 
    Game, 
    GameData, 
    findGameIdByCode, 
    findGameIdByCodeData 
} from "../game";

export class PrismaGame implements Game, findGameIdByCode {
    async create({ name, code }: GameData) {
        await prisma.game.create({
            data: {
                name,
                code
            }
        });
    };

    async findGameIdByCode({ code }: findGameIdByCodeData) {
        return await prisma.game.findUnique({
            select: {
                id: true
            },
            where: {
                code
            }
        });
    };

    async returnFullGameByCode({ code }: findGameIdByCodeData) {
        return await prisma.game.findUnique({
            select: {
                code: true,
                name: true,
                players: {
                    select: {
                        name: true,
                        value: true
                    }
                },
                result: true
            },
            where: {
                code
            }
        });
    }
}