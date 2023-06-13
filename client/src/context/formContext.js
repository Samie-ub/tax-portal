import React, { createContext, useState } from "react";

export const FormsContext = createContext();
export const FormStepContext = createContext();

export const FormStepProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  return (
    <FormStepContext.Provider value={formStep}>
      {children}
    </FormStepContext.Provider>
  );
}

export const FormsContextProvider = ({ children }) => {
  const [state, setState] = useState({
    workouts: [],
  });

  const updateWorkouts = (workouts) => {
    setState((prevState) => ({
      ...prevState,
      workouts: workouts,
    }));
  };

  const createWorkout = (workout) => {
    setState((prevState) => ({
      ...prevState,
      workouts: [workout, ...prevState.workouts],
    }));
  };

  const deleteWorkout = (workoutId) => {
    setState((prevState) => ({
      ...prevState,
      workouts: prevState.workouts.filter((w) => w._id !== workoutId),
    }));
  };

  return (
    <FormsContext.Provider
      value={{
        state,
        updateWorkouts,
        createWorkout,
        deleteWorkout,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
};
