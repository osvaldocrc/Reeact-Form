# Custom React Form with Validation

This project demonstrates how to build a custom form in **React** using **React Hook Form** for form handling and **Zod** for schema-based validation.

The form includes fields for name, email, password, and password confirmation with real-time validation and error display.

## 📦 Tech Stack

- **React** (with TypeScript)
- **React Hook Form** – Form state management
- **Zod** – Schema-based validation
- **@hookform/resolvers** – Integration between React Hook Form and Zod

## 📁 Project Structure

src/
├── components/
│ └── CustomInput.tsx # Reusable input component with validation
├── models/
│ └── index.ts # Zod schema and TypeScript types
├── CustomForm.tsx # Main form component
└── CustomInput.css # Basic styles for inputs

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copiar código
npm install
# or
yarn install
Start the development server:

bash
Copiar código
npm run dev
# or
yarn dev

🧩 How It Works
1. Form Schema Validation with Zod
Validation rules are defined using Zod:


export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }).min(1, { message: "Email is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Confirmation must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
2. Form Component
The CustomForm component integrates react-hook-form with Zod:


const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
  resolver: zodResolver(schema)
});
3. Reusable Input Component
<InputForm /> handles form field rendering and error display using the Controller from React Hook Form.


<Controller
  name={name}
  control={control}
  render={({ field }) => (
    <input {...field} className={`form-control ${error ? "is-invalid" : ""}`} />
  )}
/>
📸 UI Preview
The form includes the following fields:

Name

Email

Password

Confirm Password

Each field displays an inline validation error when applicable.

📌 Notes
Form data is logged to the console on successful submission.

All validation messages are defined in the Zod schema.

You can easily adapt this structure to support other field types or validation logic.

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

👨‍💻 Author