var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "your text",
assets : {
large_image : "image file name",
large_text : "image text" 
},
buttons : [{label : "Instagram" , url : "https://www.instagram.com/spr41n"},{label : "Github" , url : "https://github.com/spr41n"}]
}
})
})
client.login({ clientId : "your client id" }).catch(console.error);
console.log('RPC')