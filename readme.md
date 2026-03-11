## Backend
- Github repo: https://github.com/falahadeel-ctrl/Backend.git
- deployed link: https://smart-grid-dashboard-9bfs.onrender.com

## Frontend
- Github repo: https://github.com/falahadeel-ctrl/Frontend.git
- deployed link: https://frontend-9raz.onrender.com

## improvements
- connect it with grid
- notes according to specific logs(time/readings)
- delete all logs button
- invert log order
- icon for webpage
- anchor css
- file names in mongodb
- Add user authentication
- graph for trend in logs

## Description
The application automatically generates and stores electrical readings including voltage, current, and power values into a MongoDB Atlas database every 5 seconds,will simulate live data from an ESP32 microcontroller in future.

Users can monitor live readings on the dashboard which updates every second, view and delete historical logs, write and manage personal observations through a notes system, and configure device settings such as grid number, status, and description.

The backend is built with Express.js and connected to MongoDB Atlas through Mongoose. The frontend is built with React and styled using Bootstrap, with Axios handling all API communication between the frontend and backend.
Both the frontend and backend are deployed separately on Render, with environment variables managing the connection between them.

# Tech Stack

MongoDB Atlas — database
Express.js — backend framework
React + Vite — frontend
Node.js — runtime environment
Bootstrap — styling
Axios — API calls
Mongoose — MongoDB object modeling
Nodemon — development server