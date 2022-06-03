export class Command {
    constructor(signature, aliases, category, description, output, outputDelay, completionCallback) {
        this.signature = signature;
        this.aliases = aliases;
        this.category = category;
        this.description = description;
        this.output = output;
        this.outputDelay = outputDelay;
        this.completionCallback = completionCallback;
    }

    execute(terminal) {
        this.loopLines(terminal, this.output, this.outputDelay);
        typeof this.completionCallback === 'function' && this.completionCallback(terminal);
    }

    loopLines(terminal, outputLines, delay) {
        outputLines.forEach((line, index) => {
            this.addLine(terminal, line, index * delay);
        })
    }

    addLine(terminal, text, delay) {
        setTimeout(() => {
            terminal.push(text);

            var event = new CustomEvent('outputLineAdded', {});
            window.dispatchEvent(event);
        }, delay);
    }
}
