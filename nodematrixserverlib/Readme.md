nodematrixserverlib
=================


Nodejs library for common functions compatible with gomatrixserverlib

TypeScript for Federation Server Project
================================

The federation of server project took off with JS(node.js) as a tool to accomplish.Gomatrixserverlib was a library wirtten in golang by Matrix-org,so the task is to port Gomatrixserverlib to Nodematrixserverlib.As you can see there is nature difference between node.js and Golang.Porting everything to node.js from Golang is not an easy task as we have to take into notice both of node.js 's behaviour,its capabilities etc.Same in the case of Golang too. Inshort things are not very easy :)

----------


Why TypeScript?
--------------------

1) Since Federation work is basically dependent on Matrix's gomatrixserverlib and dendrite.We will need something that can scale and our stack being Javascript(our favorite:) ) ,TS is the best bet.

2) Porting Golang' to JS has to have a stongly typed pattern.We cannot completely reply on JS's weakly typed nature when things grow.

3) Hence,complexity will increase as it grows.

4) We have interfaces,generics in TS which seem to be very helpful as substitutions for 'type structs' in Golang.


#### Current Development and Transition Phase  

Already we have few modules ready(in javascript) and some are in basic dev phase.But here comes a transition for good,a phase in development where things will change forever.We will be developing everything in Typescript from now onwards.It's good to pick things up when it is getting started because later on there can be unbearable pain of maintance and development.


**This will keep on updating as we move forward with Typescript



