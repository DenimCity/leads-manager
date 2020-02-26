# leads-manager

## Setup

1. python3 - m venv env
2. source env/bin/activate
3. pip3 install django
4. pip3 install djangorestframework django-rest-knox

## Creating a Porject

1. djaango-admin startproject "name-your-project"
    - ```djaango-admin startproject leads```

2. cd leadmanager
3. create app ```python3 manage.py startapp "name-of-app"
    - cd ../ 
    - ```echo "env/*" >> .gitignore```

## Migrating Files
1. python3 manage.py makemigrations "nameof your project" 
    -  ```python3 manage.py makemigrations leads```
2. migrate model changes
    - ```python3 manage.py migrate```

## View App Deps/Creating requirements file
    View packages
    - ```pip3 freeze```
        Create a dependencies list file
    - ```pip3 freeze > requirements.txt```
    Change Directory into leadmanager
    - pip install -r requirements.txt


### Post Man Examples

 - GET http://localhost:8000/api/leads
 - POST http://localhost:8000/api/leads/
```
    {
	"name": "Sam Smith",
	"email": "samsmith@email1.com",
	"message": "please contact Sam"
    }
```
- GET http://localhost:8000/api/leads/1
- DELETE http://localhost:8000/api/leads/1/
- PATHC http://localhost:8000/api/leads/1/
```
    {
    "id": 1,
    "name": "Sam Smith",
    "email": "samsmith7@email.com",
    "message": "please contact Sam"
    }
```

### Seed database

- cd leadmanager
 
- ``` python3 manage.py seed leads --number=20```