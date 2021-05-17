# Pokéchain

##  Pokémon game played by users all around world, developed with Reach on Algorand

Pokéchain is a blockchain game project where a Creator creates a data stream and user contribute to it by paying a fixed price.
Same principle can be applied for all data-stream applications, blogs, queues, feeds; you name it.

It has 3 separate components:

- Pokechain-API: Receives POST calls with move attached and shares this information with GET calls (In an another repository called Pokechain-API)
- poke.py: Calls Pokechain-API and plays the move if there is a new move
- Pokechain: The main component of the game: Holds a Reach smart contract where a Creator creates a data stream and many Players send a move 
