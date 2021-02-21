import pyautogui
import requests
import time
# Currently only plays the game from Twitch chat, we dont need that
# Instead get the info from the API

# credentials
SERVER = "http://127.0.0.1:5000"

player_move = {
    'id': 0,
    'move': 0,
    'duration': 0,
    'name': '',
    'toPay': 0
}

BINDINGS = {
    0 : 'up',
    1 : 'down',
    2 : 'left',
    3 : 'right',
    4 : 'a button',
    5 : 'b button',
    6 : 'l trigger',
    7 : 'r trigger',
    8 : 'start',
    9 : 'select'
}

BINDINGS_KEYBOARD = {
    'up': 'up',
    'down': 'down',
    'left': 'left',
    'right': 'right',
    'a button': 'x',
    'b button': 'z',
    'l trigger': 'a',
    'r trigger': 's',
    'start': 'return',
    'select': 'backspace'
}

def game_control():
    last_id = 0;
    global player_move
    while True:
        if last_id != player_move["id"]:
            try:
                input_move = player_move["move"]
                input_word = BINDINGS[input_move]
                for _ in range(player_move["duration"]):
                    print(f"Simulating {input_word}")
                    pyautogui.keyDown(BINDINGS_KEYBOARD[input_word])
                    pyautogui.keyUp(BINDINGS_KEYBOARD[input_word])
                    time.sleep(1)
                last_id = player_move["id"]
            except Exception as e:
                print(f"[ERROR] while applying the input: {e}")
        try:
            resp = requests.get(SERVER, verify=False)
            print(f"[DEBUG] {resp.status_code}")
            if resp.status_code == 200:
                try:
                    print("[DEBUG] Connection established")
                    resp_json = resp.json()
                    print(resp_json)
                    player_move = {
                        'id': resp_json['_id'],
                        'move': resp_json['move'],
                        'toPay': resp_json['toPay'],
                        'duration': resp_json['duration'],
                        'name': resp_json['name']
                    }
                except Exception as e:
                    print(f"[ERROR] while getting the data: {e}")
        except Exception as e:
            print(f"[ERROR] while trying to connect to the API: {e}")
        time.sleep(2)

if __name__ == "__main__":
    game_control()