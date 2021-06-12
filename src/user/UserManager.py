

# from settings import dbpwd
import mysql.connector as mysql
import json
import bcrypt
from flask import Flask, request, abort, make_response
import uuid


db = mysql.connect(
    host="localhost",
    user="root",
    passwd='Zxcvbnm1',
    database="blogapp"
)

print(db)

app = Flask(__name__)


@app.route('/posts', methods=['GET', 'POST'])
def manage_posts():
    if request.method == 'GET':
        check_login()
        return get_all_posts()
    else:
        return add_post()


@app.route('/LogOut', methods=['GET'])
def logout():
    sessionid = request.cookies.get('session_id')
    query = "DELETE FROM session_id WHERE session_id = %s"
    values = (sessionid, )
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()

    print(sessionid)


@app.route('/Login', methods=['POST'])
def login():
    data = request.get_json()
    print(data)
    query = "select id, password from users where username = %s"
    values = (data['user'], )
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    if not record:
        abort(401)
    user_id = record[0]
    hashed_pwd = record[1].encode('utf-8')
    if bcrypt.hashpw(data['pass'].encode('utf-8'), hashed_pwd) != hashed_pwd:
        abort(401)

    session_id = str(uuid.uuid4())

    query = "insert into sessions (user_id, session_id) values (%s, %s) on duplicate key update session_id=%s"
    values = (user_id, session_id, session_id)
    cursor.execute(query, values)
    db.commit()
    resp = make_response()
    resp.set_cookie("session_id", session_id)
    cursor.close()
    return resp


@app.route('/SignUp', methods=['POST'])
def SignUp():
    data = request.get_json()
    print(data)
    query = "insert into users (username, password) values (%s, %s);"
    user_id = data['user']
    hashed_pwd = bcrypt.hashpw(data['pass'].encode('utf-8'), bcrypt.gensalt())
    values = (user_id, hashed_pwd)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    resp = make_response()
    return resp


def add_post():
    data = request.get_json()
    print(data)
    query = "insert into post (title ,body ) values (%s, %s)"
    values = (data['title'], data['body'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_post(new_post_id)


def get_post(id):
    query = "select id, title ,body ,time from post where id = %s"
    values = (id, )
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    header = ['id', 'title', 'body', 'time']
    return json.dumps(dict(zip(header, record)))


def check_login():
    session_id = request.cookies.get('session_id')
    if not session_id:
        abort(401)
    query = "select user_id from sessions where session_id = %s"
    values = (session_id, )
    cursor = db.cursor()
    cursor.execute(query, values)
    record = cursor.fetchone()
    if not record:
        abort(401)


def get_all_posts():
    query = "Select title,body from post"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    print(records)
    header = ['title', 'body']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))

    return json.dumps(data)


if __name__ == "__main__":
    app.run()

# # UserManager.py
#  create table post(
#          id int not null auto_increment,
#          title varchar(40) not null,
#          body text not null,
#          time datetime,
#          primary key (id));
