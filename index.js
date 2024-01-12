import {SearchUtility} from './SearchUtility.mjs';

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Dummy me."
const searchTerm = "dummy";

/*
 * getHighlightedChunks ARGS:
 * searchTerm - string
 * text - string, text to search in
 * chunkLength - int, length of the substring with match
 * getHighlightedChunks RETURN:
 * an array of substrings with matches, each match wrapped with <match> tag
 */

const chunks = SearchUtility.getHighlightedChunks(searchTerm, text, 26);

console.log(chunks);

/*
 * RESULT:
 * ["is simply <match>dummy</match> text of t"]
 */


/*
 * getTextWithHighlightedMatches ARGS:
 * searchTerm - string
 * text - string, text to search in
 * function RETURNS:
 * text with all the matches wrapped with <match> tag
 */

const textHighlighted = SearchUtility.getTextWithHighlightedMatches(searchTerm, text);

console.log(textHighlighted);

/*
 * RESULT:
 * "Lorem Ipsum is simply <match>dummy</match> text of the printing and typesetting industry. <match>Dummy</match> me."
 */
