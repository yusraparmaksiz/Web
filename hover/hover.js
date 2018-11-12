window.addEventListener("load", init);

function init()
{
  var box = document.getElementById("box");

  box.addEventListener("mouseover", function()
  {
    box.innerText = "Salam";
  });

  box.addEventListener("mouseout", function()
  {
    box.innerText = "sQL";
  });

}
