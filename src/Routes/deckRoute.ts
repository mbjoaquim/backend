import { Router } from 'express';
import { DeckController } from '../Controllers/deckController';

const deckRouter = Router();
const userController = new DeckController();

deckRouter.get('/', userController.getAllDecks);
deckRouter.post('/', userController.createDeck);

export default deckRouter;