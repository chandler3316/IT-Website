# Flask Web Application Setup

This document outlines the steps to set up and run the Flask web application.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Python 3.x](https://www.python.org/downloads/)

- [pip](https://pip.pypa.io/en/stable/installation/) (Python package installer)
  
## Step 1: Clone the Repository

Clone the project repository to your local machine using Git:
```bash
git clone git@github.com:chandler3316/IT-Website.git
cd IT-Website
```

## Step 2: Create a Virtual Environment

Create a virtual environment:
```bash
python3 -m venv venv
```

## Step 3: Activate the Virtual Environment

Activate the virtual environment:
```bash
# On Linux/Mac
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

## Step 4: Install Dependencies

Install the required dependencies listed in `requirements.txt`:
```bash
pip install -r requirements.txt
```

## Step 5: Project Layout
Ensure the project directory contains the following structure:
```
/your_project
	/static
		conn.css
		conn.js
	/templates
		index.html
app.py
```

## Step 6: Run the Project
 
Start the Flask application with the following command:
```bash
python app.py
```

## Step 7: View the Website

Open a web browser and navigate to:
```
http://127.0.0.1:5000
```
You should see the homepage of the Flask application.

## Conclusion

You are now ready to use the Flask web application. Feel free to modify and expand it as needed!
