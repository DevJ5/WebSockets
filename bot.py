import asyncio
import websockets
import json


async def message():
    async with websockets.connect('ws://localhost:4000') as ws:
        while True:
            try:
                # Receive message as string
                message = await ws.recv()
                # Convert to JSON
                message = json.loads(message)
                # If message is for this bot send something back in channel
                if message['message'].lower() == "hello bot":
                    await ws.send(json.dumps({
                        'type': 'bot',
                        'name': 'bot',
                        'message': 'hello'
                    }))
                print(message)
            except:
                pass

asyncio.get_event_loop().run_until_complete(message())
