from flask import *
import db_service

app = Flask(__name__)

app.secret_key = 'prachi2003'
@app.route('/sign_up_user',methods={'POST'})
def sign_up_user():

    """
    to sign up a new user
    """
import mysql.connector

def get_db_connection():
  mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="10082003",
  database="devbits"
  )
  return mydb
  
def sign_up_user(user_name,password,email_id):
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    insert_query = " INSERT INTO user(user_name,password,email_id) VALUES(%s,%s,%s)"
    try:
        
        cur.execute(insert_query, (user_name,password, email_id))
        db_connection.commit()
    except:
        return {'status': False, 'error': "Failed to insert"}
    result="sign up done"
    return result
def login(user_name,password):
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query = "SELECT user_id FROM user WHERE user_name=%s and password=%s"
    cur.execute(query,(user_name, password))
    row = cur.fetchall()

    return row

def add_to_watchlist(user_id,stock_id):
     db_connection = get_db_connection()
     cur = db_connection.cursor()
     insert_query = " INSERT INTO watchlist(user_id,stock_id) VALUES(%s,%s)"
     try:
        
        cur.execute(insert_query, (user_id,stock_id))
        db_connection.commit()
     except:
        return {'status': False, 'error': "Failed to insert"}
     result="watchlist updated"
     return result

def buy(user_id,stock_id,entry_price,quantity,time):
     db_connection = get_db_connection()
     cur = db_connection.cursor()
     insert_query = " INSERT INTO buys(user_id,stock_id,entry_price,quantity,time) VALUES(%s,%s,%s,%s,%s)"
     try:
        print('1')
        cur.execute(insert_query, (user_id,stock_id,entry_price,quantity,time))
        db_connection.commit()
        select_query = 'SELECT balance FROM user WHERE user_id=%s'
        cur.execute(select_query,(user_id,))
        count = cur.fetchall()
        
        balance  = count[0][0]-entry_price*quantity
        print(balance)
        select_query = 'SELECT holdings FROM user WHERE user_id=%s'
        cur.execute(select_query,(user_id,))
        count2 = cur.fetchall()
        
        holdings = count2[0][0]+entry_price*quantity
        print(holdings)
       
        update_query = "UPDATE `devbits`.`user` SET `balance` =%s, `holdings` = %s WHERE (`user_id` = %s);"
        cur.execute(update_query,(balance,holdings, user_id))
        db_connection.commit()
     except:
        return {'status': False, 'error': "Failed to insert"}
     result="added"
     return result

def sell(user_id,stock_id,exit_price,quantity,time):
     db_connection = get_db_connection()
     cur = db_connection.cursor()
     insert_query = " INSERT INTO sell(user_id,stock_id,exit_price,quantity,time) VALUES(%s,%s,%s,%s,%s)"
     try:
        print('1')
        cur.execute(insert_query, (user_id,stock_id,exit_price,quantity,time))
        db_connection.commit()
        select_query = 'SELECT balance FROM user WHERE user_id=%s'
        cur.execute(select_query,(user_id,))
        count = cur.fetchall()
        
        balance  = count[0][0]+exit_price*quantity
        print(balance)
        select_query = 'SELECT holdings FROM user WHERE user_id=%s'
        cur.execute(select_query,(user_id,))
        count2 = cur.fetchall()
        
        holdings = count2[0][0]-exit_price*quantity
        print(holdings)
       
        update_query = "UPDATE `devbits`.`user` SET `balance` =%s, `holdings` = %s WHERE (`user_id` = %s);"
        cur.execute(update_query,(balance,holdings, user_id))
        db_connection.commit()
     except:
        return {'status': False, 'error': "Failed to insert"}
     result="added"
     return result

def get_user_info(user_id):
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query="Select balance,holdings from user WHERE user_id=%s"
    cur.execute(query,(user_id,))
    rows=cur.fetchall()
    print (rows)
    print(rows[0][0])
    
    return {
        
        'info': {
            'balance': rows[0][0],
            'holdings': rows[0][1]
            
        }
    }

def get_user_buys(user_id):
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query="Select stock_id from buys WHERE user_id=%s"
    cur.execute(query,(user_id,))
    rows=cur.fetchall()
    print (rows)
    
    
    result = []
    for row in rows:
        
        entry = {
            'stock_id': row[0],
            

            }
        
        result.append(entry)
        
    
    return result

def get_user_sale(user_id):
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query="Select stock_id from sell WHERE user_id=%s"
    cur.execute(query,(user_id,))
    rows=cur.fetchall()
    print (rows)
    
    
    result = []
    for row in rows:
        
        entry = {
            'stock_id': row[0],
            

            }
        
        result.append(entry)
        
    
    return result

def get_user_watchlist(user_id):
    db_connection = get_db_connection()
    cur = db_connection.cursor()
    query="Select stock_id from watchlist WHERE user_id=%s"
    cur.execute(query,(user_id,))
    rows=cur.fetchall()
    print (rows)
    
    
    result = []
    for row in rows:
        
        entry = {
            'stock_id': row[0],
            

            }
        
        result.append(entry)
        
    
    return result
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
