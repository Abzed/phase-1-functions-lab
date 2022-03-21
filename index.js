function distanceFromHqInBlocks(num1) {
    const num2 = 42;
    return Math.abs(num1 - num2)
}



function distanceFromHqInFeet(num3) {
    let block = distanceFromHqInBlocks(num3)
    return block * 264
}



function distanceTravelledInFeet(num4, num5) {
    return Math.abs(distanceFromHqInFeet(num4) - distanceFromHqInFeet(num5))
}



function calculatesFarePrice(num6, num7) {
    let price = distanceTravelledInFeet(num6, num7);
    if (price <= 400) {
        return 0
    }
    else if(price > 400 && price <= 2000){
        return (price - 400) * 0.02;
    }
    else if(price > 2000 && price <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }
}






