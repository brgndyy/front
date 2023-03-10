import React from "react";
import "./Input.css";

import { useReducer, useEffect } from "react";
import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      value: action.value,
      isValid: validate(action.value, action.validators),
    };
  }
  if (action.type === "TOUCH") {
    return {
      ...state,
      isTouched: true,
    };
  }

  return state;
};

export default function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  const touchHanlder = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onBlur={touchHanlder}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHanlder}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}
