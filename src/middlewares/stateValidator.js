import tv4 from "tv4";
import jsonSchema from "middlewares/jsonSchema";

export default state => next => action => {
  console.log("Before next(action) in stateValidator");
  next(action); //reducers
  console.log("After next(action) in stateValidator");

  if (!tv4.validate(state.getState(), jsonSchema)) {
    console.warn("Invalid state structure detected");
  }
  console.log("END");
};
