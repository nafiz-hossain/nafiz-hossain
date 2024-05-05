import paho.mqtt.client as mqtt
import time
import uuid
import json
import random 
from random import randrange

def on_connect(client, obj, flags, rc):
    if rc == 0:
        print(f"[green] connected with result code")
    else:
        print(f"[red] Bad connection returned code = ", rc)

def on_message(client, obj, msg):
    print(f"{msg.topic} {str(msg.payload)}")

Connected = False   # global variable for the state of the connection

# Set use_websockets to True and use the ws:// or wss:// prefix in the broker URL
broker_url = "broker_url"  # Adjust the base path accordingly
client = mqtt.Client(client_id="client_id", transport='transport')  # Set transport to websockets
client.username_pw_set("username_pw_set", "pass")
client.on_connect = on_connect
client.on_message = on_message
client.connect(broker_url, keepalive=60, bind_address="")

client.subscribe("topic")
time.sleep(1)

groupId = "groupId"
my_list = ["Hello", "World"]  # Adjust the list of messages accordingly
id = ["id"]

try:
    for i in range(10):
        aiGuess = randrange(1)

        ack = {}

        value = {}

        message = {}

        formatedMessage = json.dumps(message)

        print("#### ", i)

        client.publish("topic", formatedMessage)

except KeyboardInterrupt:
    client.disconnect()
    client.loop_stop()
client.loop_forever()
