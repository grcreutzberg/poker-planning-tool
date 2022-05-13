import express from 'express';
import { PrismaGame } from '../models/prisma/game';
import { PrismaPlayer } from '../models/prisma/player';

export const pokerRoutes = express.Router();

pokerRoutes.post('/api/pokerplanningtool/creategame/', async(request, response) => {
    const { name } = request.body;
    const newCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;

    const prismaGame = new PrismaGame();
    await prismaGame.create({ 
        name,
        code: newCode.toString()
    }).then(() => {
        return response.status(201).end(JSON.stringify({
            gameID: newCode,
            gameName: name,
            players: [],
            result: null
        }));
    }).catch(() => {
        return response.status(400).send('BAD REQUEST');
    });
});

pokerRoutes.post('/api/pokerplanningtool/joingame/', async(request, response) => {
    const { code, player } = request.body;
    
    const prismaGame = new PrismaGame();
    const game = await prismaGame.findGameIdByCode({ code });
    
    const prismaPlayer = new PrismaPlayer();
    await prismaPlayer.create({
        name: player,
        gameId: game.id
    }).then(async() => {        
        return response.status(201).end(JSON.stringify({
            status: 'Success',
            message: 'Joined the game successfully'
        }));
    }).catch(() => {
        return response.status(400).send('BAD REQUEST');
    });
});

pokerRoutes.post('/api/pokerplanningtool/:id/remove/:player/', (request, response) => {

    return response.status(201).send('OK');
});

pokerRoutes.post('/api/pokerplanningtool/:id/estimate/', (request, response) => {

    return response.status(201).send('OK');
});

pokerRoutes.post('/api/pokerplanningtool/:id/newtask/', (request, response) => {

    return response.status(201).send('OK');
});

pokerRoutes.post('/api/pokerplanningtool/:id/exit/', (request, response) => {

    return response.status(201).send('OK');
});

pokerRoutes.get('/api/pokerplanningtool/:id/', async(request, response) => {
    const { id } = request.params;
    
    const prismaGame = new PrismaGame();
    const game = await prismaGame.returnFullGameByCode({ code: id });
    return response.status(201).end(JSON.stringify({
        game
    }));
});