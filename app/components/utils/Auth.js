import React from 'react';
import { Redirect } from 'react-router-dom';

class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    sessionStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return sessionStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    sessionStorage.removeItem('token');
    <Redirect to="/" />
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return sessionStorage.getItem('token');
  }

}

export default Auth;