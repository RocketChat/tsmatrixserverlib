## nodematrixserverlib

Nodejs library for common functions compatible with gomatrixserverlib

#### JavaScript Library for Federation Server Project

This is a JavaScript invocable set of library methods, in the form of an npm module, supporting chat federation via a matrix.org compatible protocol.

This library is a port of the gomatrixservlib, currently a work-in-progress from matrix.org.

tsmatrixserverlib is written in TypeScript, although calling client can be in JavaScript or TypeScript.

We selected TypeScript over JavaScript because:

1) Golang is strongly typed, TypeScript adds type support to JavaScript; we feel this will make the porting exercise easier
2) tsmatrixserverlib will likely gain complexity over time with multiple contributors, and TypeScript is more suitable for team collaborating on complex project

The is work in progress.  We will update this page from time to time.

#### Set up tsmatrixserverlib
```
$ git clone [Federation Repo](https://github.com/RocketChat/Rocket.Chat.Federation.git)
$ git checkout tsmatrixlib
$ cd tsmatrixserverlib
$ sh setup.sh
```
