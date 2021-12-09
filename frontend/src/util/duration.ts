export type Duration = { minutes: number, seconds: number, remainder?: number };
export type Milliseconds = number;

export namespace duration {
    export const fromRaw = (dur: Duration | Milliseconds): Duration => {
        if (typeof dur === "object") {
            return dur;
        }

        return fromMillis(dur);
    };

    export const fromMillis = (mil: Milliseconds): Duration => {
        const minutes = Math.floor(mil / 60_000);
        const seconds = Math.floor((mil / 1000) % 60);
        const remainder = (seconds % 1) * 1000;

        return { minutes, seconds, remainder };
    };

    export const toMillis = (dur: Duration): Milliseconds => {
        return 1000 * ((dur.minutes * 60) + dur.seconds);
    };
}
