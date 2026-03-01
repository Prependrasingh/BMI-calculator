let otp = "";
for (let i = 0; i < 4; i++) {
    const arr = Math.floor(Math.random()*10);
    otp += arr;
}
console.log(otp);

