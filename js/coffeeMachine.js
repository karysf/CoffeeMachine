export function calculateChange(drink, moneyAmount) {
    const drinks = [35,40,20,35];
    switch (drink-1) {
        case 0:
            return (moneyAmount-drinks[0]);
            break;
        case 1:
            return (moneyAmount-drinks[1]);
            break;
        case 2:
            return (moneyAmount-drinks[2]);
            break;
        case 3:
            return (moneyAmount-drinks[3]);
            break;
    }
}
