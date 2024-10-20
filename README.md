Jiachilie

Jiachilie is a mental health platform designed to support individuals experiencing difficult life transitions, such as inmates reentering society. The platform provides accessible mental health tools through both a web application and a USSD service, ensuring that users can engage regardless of internet access. Jiachilie features a chatbot powered by Gemini AI, which offers personalized guidance and stores user prompts to help event organizers create meaningful and supportive mental health programs.
This is the backend code https://github.com/Kazenzi/Jiachilie/tree/master/Frontend 
Front end code find it here https://github.com/Kazenzi/Jiachilie-Mental-Health/tree/master


Table of Contents


About the Project

Features

Tech Stack

Installation

Usage

Challenges

Future Plans

Contributing

License

About the Project

The inspiration behind Jiachilie comes from witnessing firsthand the struggles people face when transitioning back into society after incarceration. It is particularly challenging for those without access to mental health support. Jiachilie provides users with a supportive and interactive chatbot that offers real-time responses, while also allowing them to access critical mental health resources through USSD when they lack internet access.

Target Audience

Recently released inmates

People facing significant life transitions

Individuals seeking mental health support in underserved areas

Features

Web Application: Provides a user-friendly interface for accessing mental health resources.

USSD Access: Users without internet access can still interact with the platform through a USSD interface.

Gemini AI-Powered Chatbot: Offers personalized mental health advice and stores user prompts to help event organizers better understand their needs.

Data-Driven Event Planning: The chatbot’s saved prompts provide insights into common challenges faced by users, helping organizers develop relevant and targeted events.

Tech Stack

Frontend: React

Backend: Node.js

Database: MySQL

AI: Gemini AI for the chatbot

USSD Service: Accessible for users without internet

Installation

Follow these steps to set up Jiachilie locally:

Clone the repository




Copy code

git clone https://github.com/your-username/jiachilie.git
Navigate to the project directory


bash


cd jiachilie

Install dependencies for both frontend and backend

bash


npm install

Set up the MySQL database

Create a new MySQL database.

Update the database credentials in the .env file.

Run the development server


Frontend (React):

npm start
Backend (Node.js):

node server.js
Access the application

Web app: Open http://localhost:3000 in your browser.

USSD service: Set up the USSD gateway service as per your telecom provider’s instructions.

Usage

Web App: Users can access the Jiachilie web app to interact with the chatbot and access mental health resources.

USSD: Users can dial a specific USSD code (to be defined) on their phone to access the platform without needing an internet connection.

Chatbot: Users can interact with a chatbot powered by Gemini AI for mental health advice. Prompts are saved to help guide future events organized for users.

Challenges
Data Privacy: Ensuring the security of sensitive mental health data.

AI Training: Tuning the chatbot to respond appropriately to users’ mental health needs.

USSD Integration: Ensuring smooth functionality in low-bandwidth areas.

Future Plans

New Features: Introduce guided meditations, journaling tools, and community forums.

Expand Partnerships: Collaborate with mental health organizations to broaden the platform's reach.

Advanced Analytics: Use AI-driven insights to improve mental health support systems based on user interaction data.

Contributing

Contributions are welcome! Please follow these steps:


