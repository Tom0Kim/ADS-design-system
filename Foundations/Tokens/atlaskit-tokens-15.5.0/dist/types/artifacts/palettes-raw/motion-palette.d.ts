/**
 * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY {@see http://go/af-codegen}
 * @codegen <<SignedSource::0518f07e5d5a82a51f5342d8e9a81b61>>
 * @codegenCommand yarn build tokens
 */
type TokenValue = string | number | Record<string, any>;
type TokenValueOriginal = string | number | Record<string, any>;
type TokenAttributes = {
    group: string;
};
type Token = {
    value: TokenValue;
    filePath: string;
    isSource: boolean;
    attributes: TokenAttributes;
    original: {
        value: TokenValueOriginal;
        attributes: TokenAttributes;
    };
    name: string;
    path: string[];
};
declare const tokens: Token[];
export default tokens;
