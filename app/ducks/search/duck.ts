export function randomDuck():boolean{
    // 0 = normal duck
    // 1 = xenophagus (60% of chance)

    return Math.random() >= 0.6;
}