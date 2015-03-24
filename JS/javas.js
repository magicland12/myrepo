/**
 * Created by mazurandrey on 12.02.2015.
 */

var end = 0;
var tn = 'TR';
var ad = 1;
var dobj=document.getElementById('dnt');
function testDOM2() {
    var list = dobj.getElementsByTagName(tn);
    if(end>=list.length) {end = 0; return;}
    list[end].setAttribute('style','background: silver;');
    end=end+ad;
    setTimeout(testDOM2, 100);
}
function testDOM3() {
    var list = dobj.getElementsByTagName(tn);
    for (var i = 0; i < list.length; i++)
        list[i].setAttribute('style','background: white;');
    testDOM2();
}
var re = new RegExp("не","ig");
var txt = document.createTextNode("НЕ");
var elem = document.createElement("span");
elem.setAttribute('style','color:blue; background: yellow');
elem.appendChild(txt);
function testDOM4(o) {
    var list = o.childNodes;
    for (var i = 0; i < list.length; i++) {
        if(list[i].hasChildNodes()) testDOM4(list[i]);
        else if(list[i].nodeType==3 && list[i].nodeValue!='' && list[i].parentNode.nodeName!='SCRIPT' && re.test(list[i].nodeValue)) {
//list[i].nodeValue = list[i].nodeValue.replace(re, 'не'.toUpperCase());
//alert();
            var tmp = list[i].nodeValue.split('не');
            var nne;
            var nobj = document.createElement('span');
            var txt = document.createTextNode(tmp[0]);
            nobj.appendChild(txt);
            for (var j = 1; j < tmp.length; j++) {
                txt = document.createTextNode(tmp[j]);
                nne = elem.cloneNode(true);
                nobj.appendChild(nne);
                nobj.appendChild(txt);
            }
            list[i].parentNode.replaceChild(nobj,list[i]);
        }
    }
}



