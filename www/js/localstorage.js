/**
 * Created by guillaumedick on 11/10/15.
 */
(function () {
    'use strict';

    angular.module('starter.localstorage', [])
        .factory('localStorage', localStorage);

    function localStorage() {

        var localStorage = function (data) {
            angular.extend(this, data);
        };

        /**
         * Check if localStorage is supported
         * @returns {Boolean|window|String}
         */
        var isSupported = function () {
            try {
                return ('localStorage' in window && window['localStorage'] !== null);
            } catch (e) {
                console.log('localStorage not supported - ' + e.message);
                return false;
            }
        };

        /**
         * Setter
         * @param {string} key
         * @param {multi} value
         * @returns {boolean}
         */
        localStorage.set = function (key, value) {
            if (isSupported) {
                window.localStorage.setItem(key, JSON.stringify(value));
                return true;
            }
            else {
                return false;
            }
        };

        /**
         * Getter
         * @param {string} key
         * @returns {Array|Object}
         */
        localStorage.get = function (key) {
            if (isSupported) {
                return JSON.parse(window.localStorage.getItem(key));
            }
            else {
                return false;
            }
        };

        /**
         * Remove
         * @param {string} key
         * @returns {boolean}
         */
        localStorage.remove = function (key) {
            if (isSupported) {
                window.localStorage.removeItem(key);
                return true;
            }
            else {
                return false;
            }
        };

        /**
         * Clear all localStorage
         * @returns {boolean}
         */
        localStorage.clear = function () {
            if (isSupported) {
                window.localStorage.clear();
                return true;
            }
            else {
                return false;
            }
        };

        return localStorage;
    }
})();