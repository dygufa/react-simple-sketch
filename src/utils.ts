export const DEFAULT_WIDTH = 490;
export const DEFAULT_HEIGHT = 245;
export const DEFAULT_LINE_WIDTH = 1;
export const DEFAULT_LINE_COLOR = "#F00";

export function coordinates(e: MouseEvent | TouchEvent) {
    let x = 0, y = 0;

    if (e instanceof TouchEvent) {
        const rect = (e as any).target.getBoundingClientRect();
        if (!e.targetTouches[0]) {
            return;
        }
        x = e.targetTouches[0].pageX - rect.left;
        y = e.targetTouches[0].pageY - rect.top;
    } else if (e instanceof MouseEvent) {
        x = e.offsetX;
        y = e.offsetY;
    }

    return { x, y } as { x: number, y: number};
}