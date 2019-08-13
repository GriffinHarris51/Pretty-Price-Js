const prettyPrice = (original, pretty) => {
    if (pretty > 1){
        floor = Math.floor(original) + (pretty / 100)
        return(floor)
    }else {
        floor = Math.floor(original) + (pretty)
        return(floor)
    }
}

prettyPrice(3.50, .99)
prettyPrice(3.50, 99)