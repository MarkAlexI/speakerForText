export const changeSpeed = (speed) => {
  return {
    type: "CHANGE_SPEED",
    payload: speed
  }
};

export const changePitch = (pitch) => {
  return {
    type: "CHANGE_PITCH",
    payload: pitch
  }
};