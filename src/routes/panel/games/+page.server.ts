import { games } from './games.js';

export function load() {
    return {
        game_list: games.map((game) => ({
            title: game.title,
            image: game.image,
            slug: game.slug,
            description: game.description,
            url: game.url
        }))
    };
}