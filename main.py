from flask import Flask,jsonify,make_response
from flask import request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)
@app.route('/')
@cross_origin(supports_credentials=True)
def hello_world():
	return jsonify({"data":"hello"})
@app.route('/send',methods=['Post'])
@cross_origin(supports_credentials=True)
def send_data():
	message=request.form.get('message')
	if (message=="Yes"):
		return make_response(jsonify({"message":"आप किन लक्षणों का सामना कर रहे हैं?","symptoms":["बुख़ार","सूखी खांसी","सांस लेने में दिक्कत","All of the above"]}))
	if (message=="No"):
		return make_response(jsonify({"message":"Prevention steps to be followed:","symptoms":["The best way to prevent illness is to avoid being exposed to this virus.",
"Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.",
"Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.",
"Avoid touching your eyes, nose, and mouth with unwashed hands.",
"Avoid close contact with people who are sick",
"Put distance between yourself and other people if COVID-19 is spreading in your community." ]}))

app.run(host='0.0.0.0')

