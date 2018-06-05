import {leadsArr} from './getLeadsFromJSON';
import Lead from './leads';
import {tracksArr} from './getTracksFromJSON';
import Track from './tracks';
document.getElementById('leadsBtn').addEventListener('click', () => {
    
    let html = '';
    console.log(leadsArr);
    leadsArr.forEach(lead => html += `<tr><td>${lead.MID}</td><td>${lead.name}</td>><td>${lead.description}</td></tr>`);
    document.getElementById("displayDetails").innerHTML = html;
});
document.getElementById('tracksBtn').addEventListener('click', () => {
    
    let html = '';
    console.log(tracksArr);
    tracksArr.forEach(track => html += `<tr><td>${track.name}</td>><td>${track.description}</td></tr>`);
    document.getElementById("displayDetails").innerHTML = html;
});