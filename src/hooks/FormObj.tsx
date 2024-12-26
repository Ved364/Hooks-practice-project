import { useState } from "react";

function FormObj() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe@gmail.com",
  });

  return (
    <>
      <h1 className="text-center mt-5">Form Object</h1>
      <label>
        First Name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />{" "}
      </label>
      <br />
      <label>
        Last Name:{" "}
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>

      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}

export default FormObj;
