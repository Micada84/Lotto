
loto(7,39);


function loto(nums, numsFrom) {
    document.getElementById("loto-spoljni").style.width = nums * 60 + 'px';
    var brojac = 0;
    izvuceno = 0;
    lotoLoop = document.getElementById("loto-loop");
    setInterval(function () {
        if (izvuceno < nums) {
            brojac++;
            lotoLoop.innerHTML = Math.floor(Math.random() * numsFrom) + 1;
            if (brojac % 40 === 0) {
                novBroj = Math.floor(Math.random() * numsFrom) + 1;
                if (!document.getElementById('broj' + novBroj)) {
                    ++izvuceno;
                    lotoLoop.style.left = (izvuceno - 1) * 60 + 60 + 'px';
                    document.getElementById('loto-sadrzaj').innerHTML += 
                    '<div id="broj' + novBroj + '">' + novBroj + '</div>';
                }
            }

        }

    }, 20);

}


