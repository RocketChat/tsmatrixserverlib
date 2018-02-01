## tsmatrixserverlib

typescript library for common functions compatible with gomatrixserverlib

#### JavaScript Library for Federation Server Project

This is a JavaScript invocable set of library methods, in the form of an npm module, supporting chat federation via a matrix.org compatible protocol.

This library is a port of the gomatrixservlib, currently a work-in-progress from matrix.org.

tsmatrixserverlib is written in TypeScript, although calling client can be in JavaScript or TypeScript.

We selected TypeScript over JavaScript because:

1) Golang is strongly typed, TypeScript adds type support to JavaScript; we feel this will make the porting exercise easier
2) tsmatrixserverlib will likely gain complexity over time with multiple contributors, and TypeScript is more suitable for team collaborating on complex project

The is work in progress.  We will update this page from time to time.

#### Understanding the Federation Project

The project aims at replacing Hubot-Freddie bridge with Federation API taking its place.The concept of Federation API is originally derived
from [Federation API](https://matrix.org/docs/spec/r0.0.1/server_server.html).Understanding the Federation API document is really necessary in order to contribute to [Repository](https://github.com/RocketChat/Rocket.Chat.Federation/tree/tsmatrixlib/tsmatrixserverlib).The reference library is [gomatrixserverlib](https://github.com/matrix-org/gomatrixserverlib).

#### Tsmatrixserverlib Task-List

- [x] transaction.ts
- [x] timestamp.ts
- [ ] stateresolution.ts
- [ ] signing.ts
- [x] resolve.ts
- [ ] request.ts
- [x] redactevent.ts
- [x] keys.ts
- [ ] keyring.ts
- [ ] json.ts
- [ ] federationtypes.ts
- [ ] federationclient.ts
- [ ] eventcrypto.ts
- [x] eventcontent.ts
- [ ] eventauth.ts
- [x] event.ts
- [x] clientevent.ts
- [x] client.ts
- [x] base64.ts


#### Set up tsmatrixserverlib with TypeScript & JavaScript Unit Tests
```
$ git clone https://github.com/RocketChat/tsmatrixserverlib.git
$ git checkout develop
$ sh run_tests.sh
```
*Contributions are welcome
