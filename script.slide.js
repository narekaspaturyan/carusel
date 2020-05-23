let count = 1

// next implementation 

let btn4 = document.getElementById("b4")
btn4.addEventListener('click', nexstPic)
let rightArrow = document.getElementById("body")


function nexstPic() {
    count += 1
    if (count > 10) {
        count = 1
    }
    let el = document.getElementsByClassName("container")[0]
    el.style.backgroundImage = `url(img/${count}.jpg)`
    console.log(count)
}

rightArrow.addEventListener('keydown', function (el) {

    if (el.which === 39) {
        count += 1
        if (count > 10) {
            count = 1
        }
        let el = document.getElementsByClassName("container")[0]
        el.style.backgroundImage = `url(img/${count}.jpg)`
        console.log(count)
    }
})


// previous implementation 

let btn3 = document.getElementById("b3")
btn3.addEventListener('click', previousPic)
let leftArrow = document.getElementById("body")

function previousPic() {
    count -= 1
    if (count < 1) {
        count = 10
    }
    let el = document.getElementsByClassName("container")[0]
    el.style.backgroundImage = `url(img/${count}.jpg)`
    console.log(count)
}


rightArrow.addEventListener('keydown', function (el) {

    if (el.which === 37) {
        count -= 1
        if (count < 1) {
            count = 10
        }
        let el = document.getElementsByClassName("container")[0]
        el.style.backgroundImage = `url(img/${count}.jpg)`
        console.log(count)
    }
})



// random implementation 

let btn2 = document.getElementById("b2")
btn2.addEventListener('click', random)

function random() {
    let randomNum = Math.floor(Math.random() * 11)

    if (randomNum === 0) {
        randomNum = 1
    }
    let el = document.getElementsByClassName("container")[0]
    el.style.backgroundImage = `url(img/${randomNum}.jpg)`
    console.log(randomNum)
}


// play/pause implementation 

let btn1 = document.getElementById("b1");
btn1.addEventListener("click", startPause);
let intervalId = -1

function startPause() {

    if (intervalId == -1) {
        intervalId = setInterval(() => {
            let el = document.getElementsByClassName("container")[0]
            el.style.backgroundImage = `url(img/${count}.jpg)`
            count += 1
            if (count > 10) {
                count = 1
            }
            btn1.innerHTML = "pause"
        }, 3000);

    } else {
        clearInterval(intervalId)
        intervalId = -1
        btn1.innerHTML = "start"
    }
}