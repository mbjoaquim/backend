import { Request, Response } from "express";
import Deck from "../Models/Deck"

export class DeckController {
  async getAllDecks(req: Request, res: Response): Promise<void> {
    try {
      const Decks = await Deck.find();
      res.json(Decks);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createDeck(req: Request, res: Response): Promise<void> {
    try {
      const newDeck = new Deck(req.body);
      await newDeck.save();
      res.status(201).send('User created');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}