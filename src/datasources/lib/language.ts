import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

// this prevents monaco from being included in the redis datasource
// (it it already in its own chunk in vendors~monaco-editor.js)
declare const monaco: typeof Monaco;

export interface TokenValue {
    offset: number;
    offsetEnd: number;
    type: string;
    value: string;
}
export function getTokenValues(model: Monaco.editor.ITextModel, position: Monaco.Position) {
    const value = model.getValueInRange({
        startLineNumber: 0,
        startColumn: 0,
        endLineNumber: position.lineNumber,
        endColumn: model.getLineMaxColumn(position.lineNumber),
    });
    const tokens = monaco.editor.tokenize(value, model.getModeId());

    const tokenValues: TokenValue[] = [];
    for (let line = 0; line < tokens.length; line++) {
        for (let i = 0; i < tokens[line].length; i++) {
            const offset = tokens[line][i].offset;
            const offsetEnd = i + 1 < tokens[line].length ? tokens[line][i + 1].offset : model.getLineLength(line + 1); // excluding
            if (line === tokens.length - 1 && offset >= position.column - 1) {
                break;
            }

            tokenValues.push({
                offset,
                offsetEnd,
                type: tokens[line][i].type,
                value: model.getValueInRange({
                    startLineNumber: line + 1,
                    endLineNumber: line + 1,
                    startColumn: offset + 1,
                    endColumn: offsetEnd + 1,
                }),
            });
        }
    }
    return tokenValues;
}

export function findToken(tokens: TokenValue[], type: string) {
    for (let i = tokens.length - 1; i >= 0; i--) {
        if (tokens[i].type === type) {
            return tokens[i];
        }
    }
    return;
}
