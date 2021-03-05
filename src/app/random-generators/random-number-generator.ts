export class RandomNumberGenerator {
    static fromClosedInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max + 1) + min);
    }
}
