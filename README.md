React Form Validation with Zod and React Hook Form
This project is a clean and reusable form component built with React, leveraging the power of Zod for schema validation and React Hook Form for efficient state management.

Key Features
Custom Form Component: A flexible form that can be easily integrated into any React application.

Schema Validation with Zod: All form fields are validated using a robust Zod schema, ensuring data integrity before submission.

Reusable Input Component: The InputForm component is a customizable wrapper for HTML <input> elements, simplifying form creation and error handling.

Efficient State Management: React Hook Form minimizes re-renders, providing a smooth user experience.

Installation
To get the project up and running, follow these steps:

Clone the repository:

Bash

git clone https://github.com/osvaldocrc/Reeac-Form.git
Navigate to the project directory:

Bash

cd Reeac-Form
Install the dependencies:

Bash

npm install
or

Bash

yarn install
or

Bash

bun install
Usage
This project demonstrates a standard login/registration form structure. You can easily adapt the CustomForm and schema files to meet your specific needs.

Form Structure
The form includes the following fields with their corresponding validation rules:

Name: Required.

Email: Required and must be a valid email format.

Password: Required, with a minimum length of 6 characters.

Confirm Password: Required, with a minimum length of 6 characters, and must match the Password field.

Code Overview
CustomForm.tsx: The main form component that handles the form's state and submission.

models/index.ts: Defines the Zod validation schema and the corresponding TypeScript type (FormValues).

components/InputForm.tsx: A reusable input component that displays validation errors.

Dependencies
react-hook-form: For managing form state and validation.

zod: For powerful schema validation.

@hookform/resolvers: To integrate Zod with React Hook Form.

Contributing
Feel free to open issues or submit pull requests to improve this project.