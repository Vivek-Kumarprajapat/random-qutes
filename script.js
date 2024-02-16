let btn=document.getElementById("btn");
let output=document.querySelector(".output");

let quote=[
    "avoid daydreaming about the year to come ","you are the mos important person in my life ","“I love you and I don’t want to lose you. Because my life has been better since the day I found out.”",
    "“My love for you is past the mind, beyond my heart, and into my soul.”","“When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me.”",
    "“The day I met you, I found my missing piece. You complete me and make me a better person. I love you with all my heart and all my soul.”",
    "“The day I met you, I found my missing piece. You complete me and make me a better person. I love you with all my heart and all my soul.”",
    "“Age does not protect you from love, but love to some extent protects you from age.” "
]

btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quote.length)
    output.textContent=quote[random]
})