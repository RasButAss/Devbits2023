from flask import *
import db_service

app = Flask(__name__)

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

@app.route('/sign_up_user',methods={'POST'})
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

@app.route('/add_to_watchlist',methods={'POST'})
def add_watchlist():

    
    data = request.get_json()
    user_id = data['user_id']
    
    
    stock_id = data['stock_id']
    
    result =db_service.add_to_watchlist(user_id,stock_id)
    return jsonify(result)

@app.route('/buy',methods={'POST'})
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
def get_user_info():
    
    user_id = request.args.get('user_id')
  
    result = db_service.get_user_info(user_id)
    return jsonify(result)
if __name__=='__main__':
    app.run(debug=True)