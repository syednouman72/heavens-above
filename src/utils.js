/**
 * Module for utility functions used in scraping satellite data from the Heavens Above website.
 * @module utils
 */

const crypto = require('crypto');

/**
 * Converts a time string in the format "HH:MM:SS" to a timestamp in seconds.
 * @param {string} time - The time string to convert.
 * @returns {number} The timestamp in seconds.
 */
function getTimestamp(time) {
	const arr = time.split(":");
	return parseInt(arr[0]) * 3600 + parseInt(arr[1]) * 60 + parseInt(arr[2]);
}

/**
 * Generates options object for making a POST request to Heavens Above API.
 * @param {string} target - The target URL for the POST request.
 * @param {Object} opt - The request body object.
 * @returns {Object} The options object for the POST request.
 */
function post_options(target, opt) {
	return {
		url: `https://www.heavens-above.com/${target}lat=39.9042&lng=116.4074&loc=%E5%8C%97%E4%BA%AC%E5%B8%82&alt=52&tz=ChST`,
		method: "POST",
		json: true,
		body: opt,
		headers: {
			// Headers configuration
		}
	};
}

/**
 * Generates options object for making a GET request to Heavens Above API.
 * @param {string} target - The target URL for the GET request.
 * @returns {Object} The options object for the GET request.
 */
function get_options(target) {
	return {
		url: `https://www.heavens-above.com/${target}lat=39.9042&lng=116.4074&loc=%E5%8C%97%E4%BA%AC%E5%B8%82&alt=52&tz=ChST`,
		method: "GET",
		headers: {
			// Headers configuration
		}
	};
}

/**
 * Generates options object for making a GET request to fetch images.
 * @param {string} target - The target URL for the image.
 * @returns {Object} The options object for the GET request.
 */
function image_options(target) {
	return {
		url: target,
		method: "GET",
		headers: {
			// Headers configuration
		}
	};
}

/**
 * Generates options object for making a GET request to fetch iridium data.
 * @param {string} target - The target URL for the GET request.
 * @returns {Object} The options object for the GET request.
 */
function iridium_options(target) {
	return {
		url: target,
		method: "GET",
		headers: {
			// Headers configuration
		}
	};
}

/**
 * Generates an MD5 hash for the given string.
 * @param {string} str - The string to generate the hash for.
 * @returns {string} The MD5 hash of the input string.
 */
function md5(str) {
	return crypto.createHash('md5').update(str).digest('hex');
}

module.exports = {
	getTimestamp,
	post_options,
	get_options,
	image_options,
	iridium_options,
	md5
};
