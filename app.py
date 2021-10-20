from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
from flask_cors import CORS, cross_origin

app = Flask(__name__,
            static_url_path='', 
            static_folder='client/build')

CORS(app)

cred = credentials.Certificate('config/key.json')
default_app = initialize_app(cred)
db = firestore.client()
players_ref = db.collection('players')

@app.route('/api/player/get/', methods=['GET'])
@cross_origin(origin='*')
def getPlayer():
    try:
        email = request.args.get('email')
        player = players_ref.document(email).get()
        return jsonify(player.to_dict()), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/api/player/create/', methods=['POST'])
@cross_origin(origin='*')
def create_player():
    try:
        email = request.json['email']
        players_ref.document(email).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/api/player/update/', methods=['POST'])
@cross_origin(origin='*')
def update_player():
    try:
        email = request.json['email']
        players_ref.document(email).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/")
def index():
    return app.send_static_file("index.html")


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
