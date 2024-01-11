export const SearchUtility = {
/*
 * getHighlightedChunks ARGS:
 * searchTerm - string
 * text - string, text to search in
 * chunkLength - int, length of the substring with match
 * getHighlightedChunks RETURN:
 * an array of substrings with matches, each match wrapped with <match> tag
 */
    getHighlightedChunks: function (searchTerm, fullText, chunkLength) {
        let chunks = [];
        const positions = this._findPositions(searchTerm, fullText);
        const textOffset = Math.floor((chunkLength - searchTerm.length) / 2);
        positions.map(matchPosition => {
            const startFrom = (matchPosition.start - textOffset) > 0
                ? matchPosition.start - textOffset
                : 0;
            const endTo = (matchPosition.end + textOffset) < fullText.length
                ? matchPosition.end + textOffset
                : fullText.length - 1;
            const parts = [
                fullText.substr(startFrom, matchPosition.start - startFrom),
                "<match>" + fullText.substr(matchPosition.start, searchTerm.length) + "</match>",
                fullText.substr(matchPosition.end + 1, endTo - matchPosition.end + 1)
            ];
            chunks.push(parts.join(""));
        });
        return chunks;
    },

    _findPositions: function (searchTerm, fullText) {
        let chunks = [];
        let currentIndex = 0;
        let stopSearch = false;
        searchTerm = searchTerm.toLowerCase();
        fullText = fullText.toLowerCase();
        while (!stopSearch) {
            const indexFound = fullText.indexOf(searchTerm, currentIndex);
            if (indexFound === -1) {
                stopSearch = true;
                break;
            }
            currentIndex = indexFound + searchTerm.length;
            chunks.push({
                start: indexFound,
                end: indexFound + searchTerm.length
            });
        }
        return chunks;
    }
}
