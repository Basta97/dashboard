import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserProvider } from './service/user-provider/user-provider';

export const authGuard: CanActivateFn = (route, state) => {
  
  return localStorage.getItem('user') !== null;
};
