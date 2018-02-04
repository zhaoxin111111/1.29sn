window.onload=function(){
    let n=0;
    let div=document.querySelector('.banner_center li');
    let banner=document.querySelectorAll('.banner_center li');
    let left=document.querySelector('.banner_arrow_left');
    let right=document.querySelector('.banner_arrow_right');
    let dian=document.querySelectorAll('.bon_box li');
    function move() {
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
        n++;
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
    }
    left.onclick=function () {
        n--;
        if(n<0){
            n=banner.length-1;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            dian[index].classList.remove('active');
        })
        banner[n].className='active';
        dian[n].classList.add('active');
    }
    dian.forEach(function(val,ind){
        val.onclick=function(){
            dian.forEach(function(i,j){
                i.classList.remove('active')
                banner[n].classList.remove('active')
            })
            this.classList.add('active');
            banner[ind].classList.add('active');
            n=ind;
        }
    })



    
// 选项卡
    let cenav=document.querySelectorAll('.banner_left .banner-left-navigation');
    let navhid=document.querySelectorAll('.banner_xxka ul');
    console.dir(cenav);
    cenav.forEach(function(val,ind){
    val.onmouseover=function(){
        cenav.forEach(function(value,j){

            navhid[j].classList.remove('active1')
    })

        navhid[ind].classList.add('active1')
    }
    val.onmouseout=function(){
        navhid[ind].classList.remove('active1')
    }
    navhid[ind].onmouseover=function(){
        navhid[ind].classList.add('active1')
    }
    navhid[ind].onmouseout=function(){
        navhid[ind].classList.remove('active1')
    }
})






// 一键返回顶部
    let back=document.querySelector('.return');
    console.dir(back);
    back.onclick=function () {
        // document.body.scrollTop=0;
        // document.documentElement.scrollTop=0;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

//  侧导航楼层跳转
    let floors=document.querySelectorAll('.ayy');
    console.dir(floors);
    let ch=document.documentElement.clientHeight;
    console.dir(ch);
    let navs=document.querySelectorAll('.cedaohang li');
    console.dir(navs);
//     顶层隐藏条
    let hidden=document.querySelector('.hidden');
    console.dir(hidden);
     let trans=document.querySelector('.dajvhui');
    let cedao=document.querySelector('.nav_left123')
    console.dir(cedao);
    let out=true;
    let comein=false;
    let flag=true;
     window.onscroll=function () {
         let tops=document.body.scrollTop?
             document.body.scrollTop:document.documentElement.scrollTop;
         if(tops>=trans.offsetTop){
             if(out){
                     out=false;
                     cedao.style.opacity=1;
                     animate(hidden,{top:0},function () {
                     comein=true;
                 });
             }

         }else if(comein){
                     comein=false;
                     cedao.style.opacity=0;
                     animate(hidden,{top:-50},function () {
                     out=true;
                 })
             }

         
         if(!flag){
             return;
         }

    floors.forEach(function (val,index) {
             if(tops>=val.offsetTop-ch+100){
                 navs.forEach(function (dom) {
                     dom.classList.remove('active1');
                 })
                 navs[index].classList.add('active1');
             }
         })
     }
//     点击侧导航
    navs.forEach(function (dom,b) {
        dom.onclick=function () {
            let t=floors[b].offsetTop;
            animate(document.body,{scrollTop:t},100);
            animate(document.documentElement,{scrollTop:t},100);
        }
    })

}