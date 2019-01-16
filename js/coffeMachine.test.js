import {calculateChange} from "./coffeeMachine";
test(" It should calculate change", ()=>{
    const coffee = 1;
    const sum = 135;
    const result = calculateChange(coffee, sum);
    expect(result).toBe(100);
});