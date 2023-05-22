export const changeText = (text) => {
  return {
    type: "CHANGE_TEXT",
    payload: text
  }
};

export const changePitch = (pitch) => {
  return {
    type: "CHANGE_PITCH",
    payload: pitch
  }
};

export const changeSpeed = (speed) => {
  return {
    type: "CHANGE_SPEED",
    payload: speed
  }
};