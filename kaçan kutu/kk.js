window.addEventListener("load", init);

function init()
{
  var onur = document.getElementById("onur");

  onur.addEventListener("mouseover", function()
  {

    onur.style.position = "absolute";
    onur.style.left = Math.random() * 100 + "px";
    onur.style.top = Math.random() * 100 + "px";
  });
}
