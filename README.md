# Event-Entry-Time-Display
This project is intended to be used in events that have a large number of visitors, and where it's important to manage the flow of visitors to prevent overcrowding and ensure a smooth experience for everyone. Visitors should have been assigned with a ticket printing the entry time on it, which they can use to view the current entry timeslot on a designated webpage.

This project is a web application that uses vanilla HTML, CSS, and JavaScript to create a user interface for displaying and modifying a current timeslot. The application is powered by a Python-based web server that serves the HTML and JavaScript files, and provides an API for updating the timeslot value stored in an Excel file.

## Web Server
The python server handles http request and sends back the current timeslot to the web page.

## Timeslot Editor
This is a web application that allows users to view and modify a current timeslot. The application is powered by a Python-based web server that serves the HTML and JavaScript files, and provides an API for updating the timeslot value stored in an Excel file.

### Getting Started
To get started with the Timeslot Editor, follow these steps:

1. Clone the repository to your local machine.
2. Start the server by running ```python server.py``` or double click the ```start.bat```
3. Go to localhost:8888 in your web browser. (You can change in server.py)
4. Run ```python timeModifier.py```

#### Alternate Way ** Currently this is not available. **
You can also run the ```'/dist/timeModifier/timeModifier.exe'```, it uses another excel file instead of the server one.
  
## Usage
Once you have the server running, you can use the GUI to modify the timeslot value. Here's how:

- To increment the value, click the "+" button.
- To decrement the value, click the "-" button.
- To update the timeslot display, click the "Update Timeslot" button.
- The timeslot display will be updated as you modify the value.
