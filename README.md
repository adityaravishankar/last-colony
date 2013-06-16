# Last Colony

Last Colony is an RTS game with both a single player campaign mode as well as a multiplayer mode, created entirely in HTML5 and JavaScript.

[(Last Colony Demo)](http://www.adityaravishankar.com/projects/games/lastcolony/)

The single player campaign includes an economy with buildings, vehicles, aircraft along with an over arching storyline told using scripted events.

## Multiplayer Server Setup
1. Install [Node.js](http://nodejs.org/)
2. Install WebSocket-Node using command: npm install websocket
3. Start server in js/server.js using command: node js/server.js

## Pro HTML5 Games
If you are interested in learning how to recreate this game entirely from scratch, you can find a detailed walk through in the book [Pro HTML5 Games](http://www.adityaravishankar.com/pro-html5-games/).

In the process of creating this game, we look at adding intelligent unit movement using pathfinding and steering, and combat using a combination of scripted events, and finite state machines.

We then look at adding multiplayer, covering everything from the basics of WebSocket and Node.JS, to details such as compensating for network latency while keeping the player games synchronized.

