hubot-freddie
=============

Freddie is Rocket.Chat's Hubot for Federation via matrix.org

Freddie pairs a Rocket.Chat server with a Synapse Home Server.

From Rocket.Chat:

![Rocket.Chat in federated channel](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/rcsnynapse.png)

To Home Server:

![Synapse in federated room](https://raw.githubusercontent.com/Sing-Li/bbug/master/images/synapserc.png)

Out to the rest of the federated world - Slack, IRC, and beyond ... via matrix.org

NOTE: This project is a work in progress.

# Installation

```
npm install --save hubot-freddie

```
# Steps to set up Hubot-Freddie

```
Generate rocketchat-registration.yaml:
node src/matrix/genASRegFile.js -r -u <URL of hubot-freddie's incoming webhook>

Create a folder Config and copy the rocketchat-registration.yaml file to it.

Run this docker code:

docker run -it --rm \
	-e ROCKETCHAT_URL= instance of rocket.chat  \
	-e ROCKETCHAT_ROOM=GENERAL \
	-e ROCKETCHAT_ROOM_ID=GENERAL \
	-e ROCKETCHAT_USER=user name \
	-e ROCKETCHAT_PASSWORD=password \
	-e ROCKETCHAT_AUTH= \
	-e ROCKETCHAT_USER_PREFIX=@rocketchat_ \
	-e LISTEN_ON_ALL_PUBLIC=nottrue \
	-e BOT_NAME=matrix \
	-e HOMESERVER_URL=http://matrix's homeserver URL \
	-e HOMESERVER_DOMAIN=IP address \
	-e HOMESERVER_ROOM_ID=roomid:homeserver URL \
	-e HOMESERVER_SENDER_LOCAL=rcbot \
	-e INCOMING_PORT= \
	-e WRITABLE_CONFIG_PATH=/home/hubot/scripts/config \
	-e EXTERNAL_SCRIPTS=hubot-freddie,hubot-help \
	-v $PWD/config:/home/hubot/scripts/config \
	-v $PWD/node_modules/hubbot-freddie:/home/hubot/scripts \
	-p 3001:3001 \
	rocketchat/hubot-rocketchat
```

* the above setup can get hubot-freddie running

# Home Server Application Service Registration

In the `node_modules/hubot-freddie` directory:

```
npm install
node src/matrix/genASRegFile.js -r -u <URL of hubot-freddie's incoming webhook>
```

This will generate a `rocketchat-registration.yaml` file in the same directory.

Copy this file to both your Rocket.Chat server and Synapse Home Server.  Note the absolute path(s).

The format of the generated file is somewhat outdated, please add the following line at the top of the Synapse Home Server's copy:

```
id: "rocketchat"
```

On your home server, make sure to add an entry in `homeserver.yaml` to point to this file:

```
app_service_config_files: ["/absolute/path/to/rocketchat-registration.yaml"]
```

You will also need to configure Freddie for your Rocket.Chat server and Synapse Home sever..


#Configuration

You can configure Freddie via environment variables.

#### Configuration Options

Here are all of the options you can specify to configure hubot-freddie.

Note that these options are in addition to the options available with the hubot-rocketchat adpaters.  Please see [hubot-rocketchat  adapter configuration options](https://github.com/RocketChat/hubot-rocketchat#configuration-options) for more information.

Configure via: `export VAR=Value` or add to pm2 etc

Environment Variable | Description
:---- | :----
HOMESERVER_URL | the URL where your Home Server is running, as seen by the bot, specify as `http://host:port`  with no trailing slash
HOMESERVER_DOMAIN | the domain of the Home Server
HOMESERVER_ROOM_ID | the id of the federated room on the Home Server;  note this **must** be the ID and not the textual name of the room
ROCKETCHAT_ROOM_ID | the id of the federated room on the Rocket.Chat Server; note this **must** be the ID and not the textual name of the room
HOMESERVER_SENDER_LOCAL | the local user on the Home Server that will create new users and send messages on behalf of incoming Rocket.Chat messages
INCOMING_PORT | the port at which this bot will listen to incoming messages from the Home Server
ROCKETCHAT_USER_PREFIX | the prefix added to the Rocket.Chat user name when messages are sent on his/her behalf to the Home Server
WRITABLE_CONFIG_PATH |  the absolute path of the directory where the bot's Matrix bridge can find the `rocketchat-registration.yaml` Application Service configuration file, this file **must** be identical to the one registered with the Home Server
ROOM_MAP | a list of rooms to map, use `ID_ROCKETCHAT=ID_MATRIX,...,...` same as `HOMESERVER_ROOM_ID` `ROCKETCHAT_ROOM_ID`
