const view = (function () {
  let _currentGIF = _getCurrentGIF();
  const _imgElement = document.querySelector("#gifImage");

  function _setCurrentGIF(url) {
    localStorage.setItem("currentGIFCatApp", url);
    _currentGIF = url;
  }

  function _getCurrentGIF() {
    return localStorage.getItem("currentGIFCatApp");
  }

  function updateGIF(url) {
    _setCurrentGIF(url);
    _imgElement.src = url;
  }

  function restoreGIF() {
    updateGIF(_currentGIF);
    if (!_currentGIF) {
      return false;
    }
    return true;
  }

  return {
    updateGIF,
    restoreGIF,
  };
})();

export default view;
