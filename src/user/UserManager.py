from settings import dbpwd
from flask import Flask, request, abort, make_response
import mysql.connector as mysql
import requests
import json
import uuid
from flask_cors import flask_cors

db = mysql.connect(
    host="localhost",
    user="root",
    passwd=dbpwd,
    database="blogapp"
)

print(db)

app = Flask(__name__)


@app.route('/posts', methods=['GET', 'POST'])
def manage_posts():
    if request.method == 'GET':
        return get_all_posts()
    else:
        return add_post()


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
