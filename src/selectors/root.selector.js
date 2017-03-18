import { createSelector } from "reselect"

const user = (state) => state.basicReducer.user
const workout = (state) => state.basicReducer.workouts;

export const userName = createSelector(
  user,
  (_user) => _user.name
);

export const dailyWorkout = createSelector(
  workout,
  (_workout) => _workout.currentDay
);

export const monthlyWorkout = createSelector(
  workout,
  (_workout) => _workout.monthly
);

export const annualWorkout = createSelector(
  workout,
  (_workout) => _workout.annually
)
