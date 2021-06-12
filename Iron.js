class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		restituation : 0.8,
		friction : 3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x,this.y,width,height, options)
		World.add(world, this.body);
        this.width = width;
        this.height = height;

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height); 
			pop()
	}

}