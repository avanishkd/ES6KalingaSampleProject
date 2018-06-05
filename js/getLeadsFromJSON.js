import Lead from './leads';
let url = "leads.json";
console.log("in getLeads from json") ; 
console.log(url);

export let leadsArr=[];
fetch(url)
    .then(response => response.json())
    .then(leads => {
      console.log(leads);
      let result = leads.map(function(e) {
         return Object.keys(e).map(function(k) {
        return e[k];
  })
});
result.forEach(lead => { leadsArr.push(new Lead(lead[0], lead[1], lead[2]))});
console.log(leadsArr[0]);

      let html = '';
      leads.forEach(lead => {html += `<tr><td>${lead.mid}</td><td>${lead.name}</td><td>${lead.Description}%</td></tr>`});
      //document.getElementById("leads").innerHTML = html;
    })
    .catch(e => console.log(e));