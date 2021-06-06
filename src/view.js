const view = (function () {
  let _currentGIF = _getCurrentGIF();
  const _imgElement = document.querySelector("#gifImage");
  const _paragraph = document.querySelector("#timer");

  function _setCurrentGIF(url) {
    localStorage.setItem("currentGIFCatApp", url);
    _currentGIF = url;
  }

  function _getCurrentGIF() {
    const url = localStorage.getItem("currentGIFCatApp");
    console.log(url);
    return url ? url : "#";
  }

  function updateGIF(url) {
    _setCurrentGIF(url);
    _imgElement.src = url;
  }
  updateGIF(_currentGIF);

  return {
    updateGIF,
  };
})();

export default view;
