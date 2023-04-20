const getSleepHours = function (day) {
  switch (day) {
    case "monday":
      return 8;

    case "tuesday":
      return 7;
    case "wednesday":
      return 3;
    case "thursday":
      return 6;
    case "friday":
      return 6;
    case "saturday":
      return 6;
    case "sunday":
      return 12;
    default:
      return "Error:";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDept = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours < idealSleepHours) {
    console.log("Get some rest.");
  } else if (actualSleepHours === idealsleepHours) {
    console.log("Perfect amount of sleep.");
  } else {
    console.log("More sleeep than needed.");
  }
};

calculateSleepDept();
