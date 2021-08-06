class Chain {
    constructor(bird, point) {
        var options = {
            bodyA: bird,
            pointB: point,
            length: 100,
            stiffness: 0.2
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    showSling() {
        console.log(this.sling)
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push()
        strokeWeight(4)
        stroke("black")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
    }
}