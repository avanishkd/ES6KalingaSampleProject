import Track from './tracks';
let url = "tracks.json";
console.log("in getTracks from json") ; 
console.log(url);

export let tracksArr=[];
fetch(url)
    .then(response => response.json())
    .then(tracks => {
      console.log(tracks);
      let result = tracks.map(function(e) {
         return Object.keys(e).map(function(k) {
        return e[k];
  })
});
result.forEach(track => { tracksArr.push(new Track(track[0], track[1]))});
console.log(tracksArr);

      let html = '';
      leads.forEach(track => {html += `<tr><td>${track.name}</td><td>${track.description}%</td></tr>`});
      //document.getElementById("leads").innerHTML = html;
    })
    .catch(e => console.log(e));