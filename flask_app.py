from flask import Flask,request,jsonify,session,redirect
import db_service
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


app.secret_key = 'prachi2003'
@app.route('/sign_up_user',methods={'POST'})
@cross_origin()
def sign_up_user():

    """
    to sign up a new user
    """
    data = request.get_json()
    user_name = data['user_name']
    password = data['password']


    email_id = data['email_id']

    result =db_service.sign_up_user(user_name,password,email_id)
    return jsonify(result)

@app.route('/login',methods={'POST'})
@cross_origin()

def login():

    """
    login
    """
    data = request.get_json()
    user_name = data['user_name']
    password = data['password']



    length =db_service.login(user_name,password)
    if(len(length)==0):
        result="wrong credentials"
        return jsonify(result)
    else:
        
        
        return jsonify(length)


@app.route('/add_to_watchlist',methods={'POST'})
@cross_origin()

def add_watchlist():


    data = request.get_json()
    user_id = data['user_id']


    stock_id = data['stock_id']

    result =db_service.add_to_watchlist(user_id,stock_id)
    return jsonify(result)

@app.route('/buy',methods={'POST'})
@cross_origin()

def buy():


    data = request.get_json()
    user_id = data['user_id']


    stock_id = data['stock_id']
    entry_price=data['entry_price']
    quantity = data['quantity']
    time = data['time']
    result =db_service.buy(user_id,stock_id,entry_price,quantity,time)
    return jsonify(result)

@app.route('/sell',methods={'POST'})
@cross_origin()

def sell():


    data = request.get_json()
    user_id = data['user_id']


    stock_id = data['stock_id']
    exit_price=data['exit_price']
    quantity = data['quantity']
    time = data['time']
    result =db_service.sell(user_id,stock_id,exit_price,quantity,time)
    return jsonify(result)


@app.route('/get_user_info',methods={'GET'})
@cross_origin()

def get_user_trade():

    user_id = request.args.get('user_id')

    result = db_service.get_user_info(user_id)
    return jsonify(result)


@app.route('/get_user_buys',methods={'GET'})
@cross_origin()

def get_user_buys():

    user_id = request.args.get('user_id')

    result = db_service.get_user_buys(user_id)
    return jsonify(result)


@app.route('/get_user_sale',methods={'GET'})
@cross_origin()

def get_user_sale():

    user_id = request.args.get('user_id')

    result = db_service.get_user_sale(user_id)
    return jsonify(result)

@app.route('/get_user_watchlist',methods={'GET'})
@cross_origin()

def get_user_watchlist():

    user_id = request.args.get('user_id')

    result = db_service.get_user_watchlist(user_id)
    return jsonify(result)



if __name__=='__main__':
    app.run(debug=True)