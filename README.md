# FlashLearner 🪄

Welcome to **FlashLearner**, a powerful platform designed to help you create, manage, and study flashcards effortlessly. This project leverages Next.js, Firebase, and various modern web technologies to provide a seamless user experience, including advanced AI features for generating flashcards.

## Features

- **Generate Flashcards with AI**: Create flashcards automatically using AI to convert your text into flashcards.

![image](https://github.com/user-attachments/assets/4bc4041d-ae15-46f3-9b29-57c6c8508c59)

- **Manage Flashcard Sets**: Organize and manage your flashcard sets efficiently.

  ![image](https://github.com/user-attachments/assets/8b35c567-72ee-4e9a-9868-c34ef83f7933)

- **Study Flashcards**: Use a user-friendly interface to study your flashcards.

  ![image](https://github.com/user-attachments/assets/4e392a15-8e5d-4687-80e1-ed8b4a99efa8)

- **User Authentication**: Secure user authentication with Clerk.
- **Firebase Integration**: Utilize Firebase for data storage and management.

![image](https://github.com/user-attachments/assets/746d9c1f-b952-436f-9d8c-ae7068bef122)


## Technologies Used

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **Firebase**: A backend-as-a-service providing real-time database, authentication, and more.
- **Clerk**: User authentication and management.
- **Material-UI**: React components for faster and easier web development.
- **Emotion**: Styling library for writing CSS styles with JavaScript.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flashlearner.git
cd flashlearner
```

### 2. Install Dependencies

Make sure you have Node.js and npm or Yarn installed. Run the following command to install dependencies:

```bash
npm install
```

or with Yarn:

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory of your project and add your Firebase and Clerk credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

# Clerk Configuration
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
```

### 4. Run the Development Server

Start the development server to preview the application:

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser to view the application.

### 5. Build and Deploy

To build the project for production:

```bash
npm run build
```

or with Yarn:

```bash
yarn build
```

To start the production server locally:

```bash
npm start
```

or with Yarn:

```bash
yarn start
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to follow the code style and include tests for any new features.


## Contact

For any questions or feedback, feel free to reach out:

- **Email**: mitali.dixit04@gmail.com
