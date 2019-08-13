const prettyPrice = (original, pretty) => {
    if (pretty > 1){
        floor = Math.floor(original) + (pretty / 100)
        console.log(floor)
    }else {
        floor = Math.floor(original) + (pretty)
        console.log(floor)
    }
}

prettyPrice(3.50, .99)
prettyPrice(3.50, 99)