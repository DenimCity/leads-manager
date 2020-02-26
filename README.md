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

## View App Deps/Creating requirements file
    View packages
    - ```pip3 freeze```
        Create a dependencies list file
    - ```pip3 freeze > requirements.txt```
    Change Directory into leadmanager
    - pip install -r requirements.txt