import React from "react";

const FormComponent = ({ formData, handleChange }) => {
  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Gender:
        <label>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <label>
        Home City:
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="default">Select City</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
          <option value="city3">City 3</option>
        </select>
      </label>
      <br />

      <label>
        Dietary Restrictions:
        <label>
          Vegetarian
          <input
            type="checkbox"
            name="vegetarian"
            checked={formData.dietaryRestrictions.vegetarian}
            onChange={handleChange}
          />
        </label>
        <label>
          Vegan
          <input
            type="checkbox"
            name="vegan"
            checked={formData.dietaryRestrictions.vegan}
            onChange={handleChange}
          />
        </label>
        <label>
          Gluten-Free
          <input
            type="checkbox"
            name="glutenFree"
            checked={formData.dietaryRestrictions.glutenFree}
            onChange={handleChange}
          />
        </label>
        <label>
          Lactose-Free
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.dietaryRestrictions.lactoseFree}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
