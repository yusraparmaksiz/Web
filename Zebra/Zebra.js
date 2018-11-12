var zebraModu = false;

function ZebraFonksiyonu()
{
  zebraModu = !zebraModu;
  var tablolar = document.getElementsByClassName('qtable');

  for(var i = 0; i < tablolar.length; i++)
  {
    var satirlar = tablolar[i].getElementsByTagName('tr');
    console.log(satirlar.length);

    if(zebraModu)
    {
      for(var k = 0; k < satirlar.length; k++)
      {
        if(k %2 != 0)
        {
          satirlar[k].classList.add("zebra");
        }
      }
    }
  }
}

function Yusra()
{
  var tablolar = document. getElementsByClassName('qtable');
  for(var i = 0; i < tablolar.length; i++)
  {
    var satirlar = tablolar[i]. getElementsByTagName('tr');
    var basliklar = tablolar[i].getElementsByTagName('th');
    var hucre = tablolar[i].getElementsByTagName('td');
    basliklar[0].classList.add("yusra");
    for(var j = 0; j < satirlar.length*2; j++)
    {
      if(j % 2 == 0 && hucre[j] != null)
      {
        hucre[j].classList.add("yusra");
      }
    }

  }
}
