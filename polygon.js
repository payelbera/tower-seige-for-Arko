class Polygon{
    constructor(x,y,w,h){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':0.5
        }
        this.body=Bodies.circle(x,y,20,options)
        this.width=w
        this.height=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        image(polygon_img,pos.x,pos.y,30,30)
    }
      
}