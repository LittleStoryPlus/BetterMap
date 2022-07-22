import RenderContext from "./RenderContext";

class RenderContextManager {

    constructor() {
        this.renderContexts = [];
        this.lastContext = 0;
    }

    destroy() {
        for (context of this.renderContexts) {
            context?.destroy();
        }
        this.renderContexts = []
    }

    getRenderContextData(contextId) {
        return this.renderContexts[contextId];
    }

    createRenderContext(settings = {}) {
        this.lastContext++;
        let contextId = this.lastContext;

        let newContext = new RenderContext(settings);

        this.renderContexts[contextId] = newContext;

        return contextId
    }

}

export default RenderContextManager