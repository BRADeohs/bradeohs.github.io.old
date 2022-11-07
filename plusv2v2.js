class MyDate extends Date {
  addDays(days) {
    let date = new MyDate(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

 for (let i = 2; i < 9; i++) {
  let s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
  s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
  let ti = document.querySelector(s)
  ti = document.querySelector(s)
  if (ti != null) {
    dM(ti);
  } else {
    bakup();
  }
  
}

var qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
if (qi != null) {
    eM(qi);
} 

function bakup() {
  for (let i = 12; i < 19; i++) {
    let x=getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
    x=getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
    //let s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
     //let ti = document.querySelector(s)
    iD(x);
    }
    let mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[10]");
    mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[10]");
    pQ(mi);
}

function iD(select) {
  let tii = select.textcontent;
  tii = tii.split(' ');
  let tdi = new MyDate(tii[1]);
  tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  dd = nextYear.getDate();
  let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy + tii[2] + tii[3] + tii[4] + tii[5] + tii[6];
  fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy + tii[2] + tii[3] + tii[4] + tii[5] + tii[6];
  select.textcontent = fin;   
}

function pQ(select) {
  let tii = select.textcontent;
  tii = tii.split(' ');
  let tdi = new MyDate(tii[1]);
  tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  let fin = tii[0] + ' - ' + fDate;
  fin = tii[0] + ' - ' + fDate;
  select.textcontent = fin;   
}


function dM(select) {
  let tii = select.innerHTML.split(' ');
  tii = select.innerHTML.split(' ');
  let tdi = new MyDate(tii[1]);
  tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  dd = nextYear.getDate();
  let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  select.innerHTML = fin;   
}

function eM(select) {
  let tii = select.innerHTML.split(' - ');
  tii = select.innerHTML.split(' - ');
  let tdi = new MyDate(tii[1]);
  tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  let fin = tii[0] + ' - ' + fDate;
  fin = tii[0] + ' - ' + fDate;
  select.innerHTML = fin;   
}
