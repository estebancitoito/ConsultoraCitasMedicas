from typing import Mapping
from flask import Flask, request, jsonify
from flask import json
from flask.json import jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/HospitalReservations'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.users 


# First direction of the backend website
@app.route('/')
def index():
    return '<h1>Hello World<!h1>'


# Operations for the REST API

# Creation of the user
@app.route('/users', methods = ['POST'])
def createUser():
    id = db.insert({
        'name': request.json['name'],
        'fLastName': request.json['fLastName'],
        'sLastName': request.json['sLastName'],
        'rut': request.json['rut'],
        'age': request.json['age'],
        'doctorName': request.json['doctorName'],
        'date': request.json['date'],
        'email': request.json['email']
    })
    print(str(ObjectId(id)))
    return jsonify(str(ObjectId(id)))

# Get method for the users
@app.route('/users', methods = ['GET'])
def getUsers():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'fLastName': doc['fLastName'],
            'sLastName': doc['sLastName'],
            'rut': doc['rut'],
            'age': doc['rut'],
            'doctorName': doc['doctorName'],
            'date': doc['date'],
            'email': doc['email']

        })
    return jsonify(users)
   

# Get method for one user printing the person's id
@app.route('/user/<id>', methods = ['GET'])
def getUser(id):
    user = db.find_one({'_id': ObjectId(id)})
    print(user)
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'fLastName': user['fLastName'],
        'sLastName': user['sLastName'],
        'rut': user['rut'],
        'age': user['rut'],
        'doctorName': user['doctorName'],
        'date': user['date'],
        'email': user['email']
    })

# Delete method for one user searching the person's id
@app.route('/users/<id>', methods = ['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'User deleted' })

# Update method for one user searching the person's id
@app.route('/users/<id>', methods = ['PUT'])
def updateUser(id):
    db.update_one({'_id': ObjectId(id)}, {'$set':{
        'name': request.json['name'],
        'fLastname': request.json['fLastName'],
        'sLastname': request.json['sLastName'],
        'rut': request.json['rut'],
        'age': request.json['age'],
        'doctorName': request.json['doctorName'],
        'date': request.json['date'],
        'email': request.json['email']

    }})
    print(request.json)
    return 'User updated'



if __name__ == "__main__":
    app.run(debug=True)