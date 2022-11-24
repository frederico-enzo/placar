const btn = document.getElementById('go');

btn.addEventListener("click", function recebe(e) {
    e.preventDefault();
    var t1 = document.getElementById('time1');
    var t2 = document.getElementById('time2');

    var time_one = t1.value;
    var time_two = t2.value;

    let tm = document.getElementById('tmt1');
    tm.value = time_one;

    let m = document.getElementById('tmt2');
    m.value = time_two

    let pontos_time1 = 0;
    let pontos_time2 = 0;

    let ld = document.getElementById('ptn1')
    let ld2 = document.getElementById('ptn2')

    ld.innerText = pontos_time1;
    ld2.innerText = pontos_time2;

    const btn_time1 = document.getElementById('tmt1');
    const btn_time2 = document.getElementById('tmt2');

    btn_time1.addEventListener("click", function ponts1() {
        pontos_time1 += 1;
        ld.innerText = pontos_time1;

        if(pontos_time1 < pontos_time2){
            btn_time1.style.background = 'red';
            btn_time2.style.background = 'green';
        }else{
            btn_time1.style.background = 'green';
            btn_time2.style.background = 'red';
        }
        if (pontos_time1 == pontos_time2)
    {
        btn_time1.style.background = 'yellow';
        btn_time2.style.background = 'yellow';
    }
    })

    btn_time2.addEventListener("click", function ponts2() {
        pontos_time2 += 1;
        ld2.innerText = pontos_time2;
        if(pontos_time1 < pontos_time2){
            btn_time1.style.background = 'red';
            btn_time2.style.background = 'green';
        }else{
            btn_time1.style.background = 'green';
            btn_time2.style.background = 'red';
        }
        if (pontos_time1 == pontos_time2)
    {
        btn_time1.style.background = 'yellow';
        btn_time2.style.background = 'yellow';
    }
        
    })

    if (pontos_time1 == pontos_time2)
    {
        btn_time1.style.background = 'yellow';
        btn_time2.style.background = 'yellow';
    }
})

