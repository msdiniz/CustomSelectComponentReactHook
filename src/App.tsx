import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import "./styles.css";
import { useForm } from "react-hook-form";
import Select from "./Select";

const state = {
  dog: ""
};

export default function App() {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state
  });
  const [choice, setChoice] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Select
          options={[
            { value: "bullDog", label: "Bull Dog" },
            { value: "husky", label: "Husky" },
            { value: "dobermann", label: "Dobermann" }
          ]}
          error={Boolean(errors.dog)}
          value={state.dog}
          name="dog"
          selectProps={{
            ref: register({
              required: "This is a required field",
              minLength: 1
            })
          }}
        />
        <p>{errors.dog?.message}</p>
      </div>
      <button
        onClick={handleSubmit((data) => {
          console.log(data);
          setChoice(data.dog);
        })}
      >
        {" "}
        Submit{" "}
      </button>
      {choice && (
        <div>
          <h3>It's a {choice}</h3>
        </div>
      )}
    </ThemeProvider>
  );
}
