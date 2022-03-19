const INITIAL_VELOCITY = .025
const VELOCITY_INCREASE = .00001

export default class Ball{
    constructor(ballElem){
        this.ballElem = ballElem
        this.reset()
    }


get x(){
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
}

set x(value){
    this.ballElem.style.setProperty("--x",value)
}

get y(){
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
}

set y(value){
    this.ballElem.style.setProperty("--y",value)
}


rect() {
    return this.ballElem.getBoundingClientRect()
  }

reset(){
    this.x = 50
    this.y = 50
    this.direction = {x:0}

    while(Math.abs(this.direction.x)<=0.2 || Math.abs(this.direction.x)>= 0.9){
        const heading = randomNumberBtw(0,2*Math.PI)  //2*Math.PI is equal to 360 degree
        this.direction ={ x: Math.cos(heading), y: Math.sin(heading) }
    }

    this.velocity = INITIAL_VELOCITY
    // console.log(this.direction)
}

update(delta){
    this.x += this.direction.x * this.velocity *delta
    this.y += this.direction.y * this.velocity *delta
    this.velocity += VELOCITY_INCREASE* delta

    const rect = this.rect()

        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1
          }
      
          if (rect.right >= window.innerWidth || rect.left <= 0){
            this.direction.x *= -1
          }
    }
}

function randomNumberBtw(min,max){
    return Math.random()* (max-min)+ min
}