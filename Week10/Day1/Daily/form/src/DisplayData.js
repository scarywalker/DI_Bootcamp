import React from "react";

export default function DisplayData({ formData }) {
  return (
    <div>
      <h2>Form Data</h2>
      <p>
        Name: {formData.firstName} {formData.lastName}
      </p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Home City: {formData.city}</p>
      <p>Dietary Restrictions:</p>
      <ul>
        {Object.entries(formData.dietaryRestrictions).map(
          ([restriction, value]) => (
            <li key={restriction}>
              {restriction}: {value ? "Yes" : "No"}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
