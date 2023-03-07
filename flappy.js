const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 720

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2
class Sprite {
	constructor({ position, velocity }){
		this.position = position
		this.velocity = velocity
		this.height = 20
		this.width = 30
	}

	draw(){
		c.fillStyle = 'red'
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}

	update(){
		this.draw()

		this.position.x += this.velocity.x
		this.position.y += this.velocity.y

		if(this.position.y + this.height + this.velocity.y >= canvas.height){
			this.velocity.y = 0
		} else this.velocity.y += gravity
	}
}

const player = new Sprite({
	position: {
	x: 600,
	y: 330
	},
	velocity: {
		x:0,
		y:0
	}
})


console.log(player)

const keys = {
	d: {
		pressed: false
	},
	w: {
		pressed: false
	}
}
let lastKey

function animate(){
	window.requestAnimationFrame(animate)
	c.fillStyle = 'green'
	c.fillRect(0, 0, canvas.width, canvas.height)
	player.update()

	}if (keys.d.pressed && lastKey == 'd') {
		player.velocity.x = 1
	}

animate()

window.addEventListener('keydown', (event) => {
	console.log(event.key)
	switch(event.key){
		case 'd':
			player.velocity.x = 0
		case 'w':
			player.velocity.y = -10
			break
	}
	console.log(event.key);
})

window.addEventListener('keyup', (event) => {
	switch(event.key){
		case 'd':
			keys.d.pressed = false
			break
		case 'w':
			keys.w.pressed = false
			break

	}
	console.log(event.key);
})