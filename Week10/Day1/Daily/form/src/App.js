import React, { useState } from "react";
import FormComponent from "./FormComponent";
import DisplayData from "./DisplayData";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
    city: "default",
    dietaryRestrictions: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      lactoseFree: false,
    },
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setFormData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          dietaryRestrictions: {
            ...prevData.dietaryRestrictions,
            [name]: checked,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  return (
    <div className="App">
      <FormComponent formData={formData} handleChange={handleChange} />
      <DisplayData formData={formData} />
    </div>
  );
}

export default App;
