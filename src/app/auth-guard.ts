import { CanActivateFn } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { UserProvider } from './service/user-provider/user-provider';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {

  const platformId = inject(PLATFORM_ID);
  if(isPlatformBrowser(platformId)){
    return localStorage.getItem('user') !== null;
  }
  return true;
};
