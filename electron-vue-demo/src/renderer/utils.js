function Play(id, from) {
    console.log(from)
    console.log(document)
    console.log(document.getElementById('toolPlay7722'))
    console.log(document.getElementById('toolPlay' + id))
    if (document.getElementById('toolPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('toolPlay' + id).style.display = "block";
                document.getElementById('speakerimg' + id).src = "https://song.gushiwen.cn/siteimg/speak-erOk.png";
                document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/viewplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {
      var xmlhttp;
      if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp = new XMLHttpRequest();
      }
      else {// code for IE6, IE5
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              document.getElementById('toolPlay' + id).style.display = "none";
              document.getElementById('speakerimg' + id).src = "https://song.gushiwen.cn/siteimg/speak-er.png";
              document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
          }
      }
      xmlhttp.open("GET", "/viewplay.aspx?id=0", false);
      xmlhttp.send();
    }
  }

//   export {
//       Play
//     }