from flask import *
import db_service

app = Flask(__name__)

app.secret_key = 'prachi2003'
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

@app.route('/login',methods={'POST'})
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
        session['loggedin']='true'
        session['user_id']=length[0][0]
        result="logged in"
        return jsonify(result)
    

@app.route('/add_to_watchlist',methods={'POST'})
def add_watchlist():

    
    data = request.get_json()
    user_id = session['user_id']
    
    
    stock_id = data['stock_id']
    
    result =db_service.add_to_watchlist(user_id,stock_id)
    return jsonify(result)

@app.route('/buy',methods={'POST'})
def buy():

    
    data = request.get_json()
    user_id = session['user_id']
    
    
    stock_id = data['stock_id']
    entry_price=data['entry_price']
    quantity = data['quantity']
    time = data['time']
    result =db_service.buy(user_id,stock_id,entry_price,quantity,time)
    return jsonify(result)

@app.route('/sell',methods={'POST'})
def sell():

    
    data = request.get_json()
    user_id = session['user_id']
    
    
    stock_id = data['stock_id']
    exit_price=data['exit_price']
    quantity = data['quantity']
    time = data['time']
    result =db_service.sell(user_id,stock_id,exit_price,quantity,time)
    return jsonify(result)


@app.route('/get_user_info',methods={'GET'})
def get_user_trade():
    
    user_id = session['user_id']
    
    result = db_service.get_user_info(user_id)
    return jsonify(result)
@app.route('/get_user_buys',methods={'GET'})
def get_user_buys():
    
    user_id = session['user_id']
    
    result = db_service.get_user_buys(user_id)
    return jsonify(result)
@app.route('/get_user_sale',methods={'GET'})
def get_user_sale():
    
    user_id = session['user_id']
    
    result = db_service.get_user_sale(user_id)
    return jsonify(result)

@app.route('/get_user_watchlist',methods={'GET'})
def get_user_watchlist():
    
    user_id = session['user_id']
    
    result = db_service.get_user_watchlist(user_id)
    return jsonify(result)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/login")
if __name__=='__main__':
    app.run(debug=True)
