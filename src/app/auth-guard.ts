import { CanActivateFn, Router } from '@angular/router';
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
export const redirectLoggedInToMain: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    const isLoggedIn = !!localStorage.getItem('user');

    if (isLoggedIn) {
      // logged in → always send to main page
      router.navigate(['/dashboard/overview']);
      return false;
    }
  }

  return true;
};