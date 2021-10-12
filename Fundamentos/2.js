function checarTriangulo(a, b, c) {

    if (a == b && b == c) {
        console.log("equilatero")
    } else if (a == b || a == c || c == b ) {
        console.log("isóceles")
    } else {
        console.log("Escaleno")
    }

}

checarTriangulo(2, 2, 2)