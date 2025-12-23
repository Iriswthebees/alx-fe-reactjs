import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  const [useFormik, setUseFormik] = useState(false);

  const toggleForm = () => {
    setUseFormik((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Form Handling in React</h1>

      {/* Switch Button */}
      <button
        onClick={toggleForm}
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Switch to {useFormik ? "Controlled Form" : "Formik Form"}
      </button>

      {/* Conditional Rendering */}
      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;
