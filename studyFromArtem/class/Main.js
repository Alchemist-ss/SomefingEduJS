class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    minusHeight(a) {
        this.height = a
        console.log(this.minusWidth(3))
        return this.height
    }
    minusWidth(a) {
        this.width = a
        return this.width
    }
}
const example = new Rectangle(10, 10)
console.log(example.minusHeight(5))
console.log(example.height)

class Human {
    constructor(hp, leisure) {
        this.hp = leisure;
        this.gender = "men";
    }
}