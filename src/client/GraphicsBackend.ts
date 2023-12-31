import { CommandBuffer } from "./CommandBuffer";
import { CommandProcessor } from "./CommandProcessor";
import { CommandInit } from "./commands";

export class GraphicsBackend {
    processor: CommandProcessor;
    glContext: WebGL2RenderingContext;

    runBuffer(buffer: CommandBuffer) {
        this.processor.runBuffer(buffer);
    }

    constructor(ctx: WebGL2RenderingContext) {
        console.log("Im initing graphics backend lmao");

        this.glContext = ctx;
        this.processor = new CommandProcessor(ctx);

        const buf = new CommandBuffer();
        let test = new CommandInit();
        buf.addCommand(test);

        this.runBuffer(buf);

    }
}
