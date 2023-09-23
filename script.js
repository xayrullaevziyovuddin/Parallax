class Parallax {
    constructor(obj) {
        this.clouds = document.querySelectorAll(obj.clouds)
        this.boat = document.querySelector(obj.boat)
        window.addEventListener('scroll', () => {
            this.moveElements()
        })
    }
    moveElements() {
        this.clouds.forEach((el) => {
            let speed = el.getAttribute('data-speed')
            el.style.transform = `translateX(${window.scrollY*speed}px)`
        });
        this.boat.style.transform = `translateX(${window.scrollY}px)`
    }

}
new Parallax({
    clouds: '.header__cloud',
    boat: '.header__boat',
})


class Text {
    constructor(item) {
        this.item = document.querySelector(item)
        this.fullText = this.item.innerHTML
        this.item.innerHTML = ''
        this.editText()
    }
    editText() {
        let x = 0
        this.item.innerHTML += this.fullText[x]

        let time = setInterval(() => {
            x++
            this.item.innerHTML += this.fullText[x]
            if (x == this.fullText.length - 1) {
                clearInterval(time)
            }
        }, 200);
        console.log(this.fullText.length);


    }
}

new Text('.header__title')
new Text('.parallax__title')

class Scroll {
    constructor(name) {
        this.section = document.querySelector(name)
        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.section, 2)
        })
    }
    fadeRightAnim(section, coord) {
        const fadeRight = document.querySelectorAll('.fade-right')
        fadeRight.forEach(item => {
            let speed = item.getAttribute('data-speed')
            item.style.transition = speed + 'ms'

            if (window.scrollY >= (section.offsetTop - section.offsetHeight * coord)) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })

    }
}

new Scroll('.scroll__cards')

/* PARALLAX MOVEL */

class ParallaxMove{
    constructor(obj){
        this.moveEl = document.querySelectorAll(obj.moveEl)
        
        window.addEventListener("mousemove", (e) =>{
            
            this.moveItems(e)
            
        })
        
        
        
    }
    
    moveItems(e){
        this.moveEl.forEach(items =>{
           const speed = items.getAttribute("data-speed");
          
        const X = (window.innerWidth - e.pageX * speed) / 50;
        const Y = (window.innerWidth - e.pageY * speed) / 100;

           
        items.style.transform = `translate(${X}px,${Y}px)`;
        })
        
        
    }
    
    
    
    
    
}

const parallaxMove = new ParallaxMove({
    moveEl:".parallax__ball"
})

/* PARALLAX end*/

/* Bubble */
class Bubble {
    
    constructor(obj){
        this.bubble = document.querySelectorAll(obj.bubble)
        
        this.bubble.forEach(bubbles =>{
            bubbles.addEventListener("mousemove", (e) =>{
                
                this.bubbleShow(e, bubbles)
                
            })
            
            
            
        })
        
        
        
        
        
    }
    
    bubbleShow(e, item){
        const X = e.pageX - item.offsetLeft
        const Y = e.pageY - item.offsetTop
 
        let span = item.querySelector('span')
        
        span.style.left = `${X}px`
        span.style.top = `${Y}px`
        
    }
    
    
    
}

const bubble = new Bubble({
    bubble:".timer__btn"
    
    
})
/* Bubble end */

/* Rotate3D */
class Rotate3D {
    constructor(obj){
        this.card = document.querySelectorAll(obj.card)
        this.card.forEach(cards =>{
            cards.addEventListener("mousemove",(e)=>{this.rotate(e,cards)});
            cards.addEventListener("mouseout",()=>{this.rotateNone(cards)});
            
            
            
        })
        
        
        
        
    }
    rotate(e, item){
        const cardItem = item.querySelector('.card__item')
        const halHeight = cardItem.offsetHeight / 2
        cardItem.style.transform = `rotateX(${(halHeight - e.offsetY) / 10}deg) rotateY(${-(halHeight - e.offsetX)/10}deg)  `
    }
    rotateNone(item){
        const cardItem = item.querySelector('.card__item')
        cardItem.style.transform = 'rotate(0)'
    }
    
}

const rotate3D = new Rotate3D({
    
    card:'.card'
    
    
})





