This is a simple Search Utility with two functions: 
  1. To find matches within the text and get result as an array of substrings of the length given. Each match is wrapped with the <match> tag.
  2. Highlight all the matches within the text by <match> tag wrapping

Utility is in the mjs file and can be used with ES6 code. to include the utility to the other file do the following:

    import {SearchUtility} from './SearchUtility.mjs';

**How to get an array of chunks with matches:**

    const chunks = SearchUtility.getHighlightedChunks(term, text, length);

*Arguments:*

    term - string
    text - string, text to search in
    lengthength - int, length of the substring with match

*Result:*

    [match1 (string), ...]

**How to get the text with highlighted matches:**

    const textWithHighlightedMatches = SearchUtility.getTextWithHighlightedMatches(term, text);

*Arguments:*

    term - string
    text - string, text to search in

*Result:*

    string with all the matches wrapped with <match> tag
