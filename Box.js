class Box{
    constructor(x,y,width,height)
    {  
var box_options={
restitution : 1,
friction : 0.5,
density : 0.1

}
        this.Body= Bodies.rectangle(x,y,width,height,box_options);
        this.width=width ;
        this.height=height;
        World.add(world,this.Body);
    }

    display()
    {
        var pos = this.Body.position;
        var angle = this.Body.angle ;
        // captures new setting-push()
        push();
        // to change the 0 of the axis to the given x and y positions translate()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        // to revert back the old setting -- pop()
        pop();
    }
}