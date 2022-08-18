/**
 * 去除首位空格
 */
export function trim (text) {
    return text == null ? "" : (text + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}