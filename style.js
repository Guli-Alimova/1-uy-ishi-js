let box =document.getElementsByTagName('div');


// for (let i = 0; i <box.length; i++){
//     setTimeout(function() {
//         box[i].style.opacity = '1';
//         //  backgroundImage =`url(./img/${img[i]})`;
//         }, (i+1)*2000);

// }


function picture() {
    let i = 0; 
    {
        setInterval(function () {
            if (i == box.length) {
                i = 0;
                for (el of box) {
                    el.style.opacity = '0'
                }
            }
            box[i].style.opacity = '1';
            i++;
        }, 2000)

    }
}
picture()