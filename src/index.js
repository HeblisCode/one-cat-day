import "./index.css";
import getGIF from "./getGIF";
import view from "./view";
import { getUnixTime } from "date-fns";
import Timer from "easytimer.js";

const controller = (function () {
  const DAY_IN_SECONDS = 86400;
  const _lastUpdateTime = _getLastUpdateTime();
  const _paragraph = document.querySelector("#timer");

  function _getLastUpdateTime() {
    const date = localStorage.getItem("lastUpdateCatApp");
    return new Date(date);
  }

  function _setLastUpdateTime() {
    const date = new Date();
    localStorage.setItem("lastUpdateCatApp", date);
  }

  async function _setNewGIF() {
    const url = await getGIF.getURL();
    view.updateGIF(url);
    _setLastUpdateTime();
    _createTimer();
  }

  function _createTimer() {
    const timePassed = getUnixTime(new Date()) - getUnixTime(_lastUpdateTime); //time passed from last update in second
    const timer = new Timer();

    timer.start({
      countdown: true,
      startValues: { seconds: DAY_IN_SECONDS - timePassed },
    });

    //set the timer on the HMTL
    _paragraph.innerText = timer.getTimeValues().toString();
    timer.addEventListener("secondsUpdated", () => {
      _paragraph.innerText = timer.getTimeValues().toString();
    });

    timer.addEventListener("targetAchieved", _setNewGIF);
  }

  function init() {
    const timePassed = getUnixTime(new Date()) - getUnixTime(_lastUpdateTime); //time passed from last update in second
    if (timePassed > DAY_IN_SECONDS) {
      _setNewGIF(); //set a new GIF if more than one day has passed
    } else {
      _createTimer(); //restores the timer
    }
  }

  init();
})();
