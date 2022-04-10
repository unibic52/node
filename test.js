console.log('Beep beep! 🤖');


const fetch = require("node-fetch");

const Discord = require('discord.js');

const client = new Discord.Client();


client.login('ODgwMzAyMjYwMTY3NTI0NDAy.YScTXg.-MAheT0895ZvN4RSpLSsLB41L2I');

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('💖');
}

const replies = [
  '🚂🌈💖',
  'Choo choo!',
  'Ding! 🛎',
  'Never forget this dot!'
]

client.on('message', gotMessage);
let i;
let j;
let p = false;

async function gotMessage(msg) {

    let tokens = msg.cleanContent.split(" ");

    async function send(url){

        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
        return;
    
    }
    if (tokens[0] == "-"){
        keywords = tokens.slice(1, tokens.length).join(" ");
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
        send(url)
    }
    for(i = 0;i<=tokens.length;i++){
     let end_point;
     if (tokens[i] == "/"){
        for(j = i+1;j<=tokens.length;j++){
            if(tokens[j]=="/"){
                end_point = j;
                break;
            }
        }
     break;
    }
    }
    

    if (tokens[i] == "/" && tokens[j] == "/") {
            keywords = tokens.slice(i+1, j).join(" ");
            console.log(keywords)
            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`;
            send(url)
    
            }
    }
