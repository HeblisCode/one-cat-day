const getGIF = (function () {
  const _GIFArray = []; //stores up to MAX_GIF gifs to avoid getting a duplicate
  const _MAX_GIF = 50;

  function _restoreData() {
    const data = JSON.parse(localStorage.getItem("GIFArrayCatApp"));
    if (!data) return;
    data.forEach((element) => _pushNewGIF(element));
  }
  _restoreData();

  function _pushNewGIF(GIF) {
    if (!GIF) return;
    if (_GIFArray.length >= _MAX_GIF) {
      _GIFArray.shift();
    }
    _GIFArray.push(GIF);
    localStorage.setItem("GIFArrayCatApp", JSON.stringify(_GIFArray));
  }

  function _checkForDuplicates(url) {
    if (_GIFArray.some((element) => element === url)) {
      console.log("duplicate!");
      return null;
    }
    return url;
  }

  async function getURL() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=R3NCo8jcFVzkPWBWhzgHMt7yIDE5KNRO&s=cats",
      { mode: "cors" }
    );
    const imgData = await response.json();
    const imgURL = imgData.data.images.original.url;
    const result = _checkForDuplicates(imgURL);
    _pushNewGIF(result);
    return result ? result : await getURL();
  }

  return {
    getURL,
  };
})();

export default getGIF;
